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

export const deleteExpense = async (groupId: number, expenseId: number) => {
  const res = await client.delete(`/groups/${groupId}/expenses/${expenseId}`);
  return res.data;
};

export const addMemberToExpense = async (
  groupId: number,
  expenseId: number,
  userId: number,
) => {
  const res = await client.post(
    `/groups/${groupId}/expenses/${expenseId}/members`,
    { userId },
  );
  return res.data;
};

export const updateExpense = async (
  groupId: number,
  expenseId: number,
  description: string,
  amount: number,
  memberIds: number[],
) => {
  const res = await client.patch(`/groups/${groupId}/expenses/${expenseId}`, {
    description,
    amount,
    memberIds,
  });
  return res.data;
};
