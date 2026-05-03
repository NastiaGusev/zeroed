/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async createGroup(name: string, ownerId: number) {
    const group = await this.prisma.group.create({
      data: {
        name,
        ownerId,
        members: {
          create: { userId: ownerId }, // owner is automatically a member
        },
      },
      include: {
        members: true,
      },
    });
    return group;
  }

  async getGroup(groupId: number) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
              },
            },
          },
        },
        expenses: true,
      },
    });

    if (!group) {
      throw new NotFoundException(`Group ${groupId} not found`);
    }

    return group;
  }

  async addMember(groupId: number, userId: number) {
    return this.prisma.groupMember.create({
      data: { groupId, userId },
    });
  }

  async settleAll(groupId: number) {
    // Mark group as settled
    return this.prisma.group.update({
      where: { id: groupId },
      data: { settledAt: new Date() },
    });
  }

  async settleDebt(
    groupId: number,
    fromUserId: number,
    toUserId: number,
    amount: number,
  ) {
    return this.prisma.settlement.create({
      data: {
        groupId,
        fromUserId,
        toUserId,
        amount,
      },
    });
  }

  async deleteGroup(groupId: number) {
    // Delete in correct order — children before parents
    await this.prisma.settlement.deleteMany({ where: { groupId } });
    await this.prisma.expenseSplit.deleteMany({
      where: { expense: { groupId } },
    });
    await this.prisma.expense.deleteMany({ where: { groupId } });
    await this.prisma.groupInvite.deleteMany({ where: { groupId } });
    await this.prisma.groupMember.deleteMany({ where: { groupId } });
    return this.prisma.group.delete({ where: { id: groupId } });
  }

  async getUserGroups(userId: number) {
    return this.prisma.groupMember.findMany({
      where: { userId },
      include: {
        group: true,
      },
    });
  }
}
