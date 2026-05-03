import client from "./client";
import type { Group, Transaction, UserGroup } from "../types";

export const createGroup = async (name: string) => {
  const res = await client.post("/groups", { name });
  return res.data as Group;
};

export const getGroup = async (id: number) => {
  const res = await client.get(`/groups/${id}`);
  return res.data as Group;
};

export const addMember = async (groupId: number, userId: number) => {
  const res = await client.post(`/groups/${groupId}/members`, { userId });
  return res.data;
};

export const getBalances = async (groupId: number) => {
  const res = await client.get(`/groups/${groupId}/expenses/balances`);
  return res.data as Transaction[];
};

export const settleDebt = async (
  groupId: number,
  toUserId: number,
  amount: number,
) => {
  const res = await client.post(`/groups/${groupId}/settle`, {
    toUserId,
    amount,
  });
  return res.data;
};

export const deleteGroup = async (groupId: number) => {
  const res = await client.delete(`/groups/${groupId}`);
  return res.data;
};

export const settleAll = async (groupId: number) => {
  const res = await client.post(`/groups/${groupId}/settle-all`);
  return res.data;
};

export const getUserGroups = async () => {
  const res = await client.get("/groups");
  return res.data as UserGroup[];
};
