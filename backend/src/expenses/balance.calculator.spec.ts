import { calculateMinimumTransactions } from './balance.calculator';

describe('calculateMinimumTransactions', () => {
  it('should return empty array when no balances', () => {
    const result = calculateMinimumTransactions({});
    expect(result).toEqual([]);
  });

  it('should return empty array when everyone is settled', () => {
    const result = calculateMinimumTransactions({ 1: 0, 2: 0, 3: 0 });
    expect(result).toEqual([]);
  });

  it('should handle simple two person split', () => {
    // Nastia paid, Shir owes
    const balances = { 1: 60, 2: -60 };
    const result = calculateMinimumTransactions(balances);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({ from: 2, to: 1, amount: 60 });
  });

  it('should handle multiple debtors to one creditor', () => {
    // Nastia paid for everyone
    const balances = { 1: 90, 2: -30, 3: -30, 4: -30 };
    const result = calculateMinimumTransactions(balances);

    expect(result).toHaveLength(3);
    expect(result.every((t) => t.to === 1)).toBe(true);

    const totalPaid = result.reduce((sum, t) => sum + t.amount, 0);
    expect(totalPaid).toBe(90);
  });

  it('should handle multiple creditors and debtors', () => {
    // Nastia +80, Yael +30, Ron -50, Shir -40, Dana -20
    const balances = { 1: 80, 4: 30, 5: -50, 2: -40, 3: -20 };
    const result = calculateMinimumTransactions(balances);

    // Verify total debts equal total credits
    const totalFrom = result.reduce((sum, t) => sum + t.amount, 0);
    const totalTo = result.reduce((sum, t) => sum + t.amount, 0);
    expect(totalFrom).toBe(totalTo);

    // Verify all balances are zeroed out
    const finalBalances: Record<number, number> = { ...balances };
    for (const t of result) {
      finalBalances[t.from] += t.amount;
      finalBalances[t.to] -= t.amount;
    }
    const allZeroed = Object.values(finalBalances).every(
      (b) => Math.abs(b) < 0.01,
    );
    expect(allZeroed).toBe(true);
  });

  it('should handle floating point amounts correctly', () => {
    // 100 split 3 ways = 33.33...
    const balances = { 1: 66.67, 2: -33.33, 3: -33.34 };
    const result = calculateMinimumTransactions(balances);

    expect(result).toHaveLength(2);
  });

  it('should minimize number of transactions', () => {
    // 3 people, 1 creditor — should be exactly 2 transactions
    const balances = { 1: 100, 2: -60, 3: -40 };
    const result = calculateMinimumTransactions(balances);

    expect(result).toHaveLength(2);
  });
});
