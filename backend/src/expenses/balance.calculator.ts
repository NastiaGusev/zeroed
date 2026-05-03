export interface Transaction {
  from: number;
  to: number;
  amount: number;
}

export function calculateMinimumTransactions(
  balances: Record<number, number>,
): Transaction[] {
  const creditors: { userId: number; amount: number }[] = [];
  const debtors: { userId: number; amount: number }[] = [];

  for (const [userId, amount] of Object.entries(balances)) {
    const rounded = Math.round(amount * 100) / 100;
    if (rounded > 0)
      creditors.push({ userId: Number(userId), amount: rounded });
    if (rounded < 0)
      debtors.push({ userId: Number(userId), amount: Math.abs(rounded) });
  }

  const transactions: Transaction[] = [];
  let i = 0;
  let j = 0;

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

  return transactions;
}
