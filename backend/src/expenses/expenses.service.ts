import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async createExpense(
    groupId: number,
    paidById: number,
    description: string,
    amount: number,
    memberIds: number[],
  ) {
    const splitAmount = amount / memberIds.length;

    const expense = await this.prisma.expense.create({
      data: {
        groupId,
        paidById,
        description,
        amount,
        splits: {
          create: memberIds.map((userId) => ({
            userId,
            amount: splitAmount,
          })),
        },
      },
      include: {
        splits: true,
        paidBy: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return expense;
  }

  async getGroupExpenses(groupId: number) {
    return this.prisma.expense.findMany({
      where: { groupId },
      include: {
        paidBy: {
          select: { id: true, name: true, email: true },
        },
        splits: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
      orderBy: { date: 'desc' },
    });
  }

  async getGroupBalances(groupId: number) {
    // Step 1 — calculate net balance per user
    const expenses = await this.prisma.expense.findMany({
      where: { groupId },
      include: { splits: true },
    });

    const balances: Record<number, number> = {};

    for (const expense of expenses) {
      balances[expense.paidById] =
        (balances[expense.paidById] ?? 0) + expense.amount;

      for (const split of expense.splits) {
        balances[split.userId] = (balances[split.userId] ?? 0) - split.amount;
      }
    }

    // Step 2 — separate into creditors and debtors
    const creditors: { userId: number; amount: number }[] = [];
    const debtors: { userId: number; amount: number }[] = [];

    for (const [userId, amount] of Object.entries(balances)) {
      const rounded = Math.round(amount * 100) / 100;
      if (rounded > 0)
        creditors.push({ userId: Number(userId), amount: rounded });
      if (rounded < 0)
        debtors.push({ userId: Number(userId), amount: Math.abs(rounded) });
    }

    // Step 3 — greedily match debtors to creditors
    const transactions: { from: number; to: number; amount: number }[] = [];

    let i = 0; // creditor index
    let j = 0; // debtor index

    while (i < creditors.length && j < debtors.length) {
      const creditor = creditors[i];
      const debtor = debtors[j];

      const settlement = Math.min(creditor.amount, debtor.amount);

      transactions.push({
        from: debtor.userId,
        to: creditor.userId,
        amount: settlement,
      });

      creditor.amount -= settlement;
      debtor.amount -= settlement;

      if (creditor.amount === 0) i++;
      if (debtor.amount === 0) j++;
    }

    // Step 4 — fetch user names for readable output
    const userIds = [
      ...new Set([
        ...transactions.map((t) => t.from),
        ...transactions.map((t) => t.to),
      ]),
    ];

    const users = await this.prisma.user.findMany({
      where: { id: { in: userIds } },
      select: { id: true, name: true },
    });

    const userMap: Record<number, string> = {};
    for (const user of users) {
      userMap[user.id] = user.name;
    }

    return transactions.map((t) => ({
      from: { id: t.from, name: userMap[t.from] },
      to: { id: t.to, name: userMap[t.to] },
      amount: t.amount,
    }));
  }
}
