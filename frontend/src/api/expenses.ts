import client from "./client";
import type { Expense } from "../types";

export const createExpense = async (
  groupId: number,
  description: string,
  amount: number,
  memberIds: number[],
) => {
  const res = await client.post(`/groups/${groupId}/expenses`, {
    description,
    amount,
    memberIds,
  });
  return res.data as Expense;
};

export const getExpenses = async (groupId: number) => {
  const res = await client.get(`/groups/${groupId}/expenses`);
  return res.data as Expense[];
};
