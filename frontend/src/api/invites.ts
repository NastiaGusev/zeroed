import client from "./client";

export const sendInvite = async (groupId: number, email: string) => {
  const res = await client.post(`/invites/groups/${groupId}`, { email });
  return res.data;
};

export const getPendingInvites = async () => {
  const res = await client.get("/invites/pending");
  return res.data as {
    id: number;
    email: string;
    group: { id: number; name: string };
  }[];
};

export const acceptInvite = async (inviteId: number) => {
  const res = await client.post(`/invites/${inviteId}/accept`);
  return res.data;
};

export const declineInvite = async (inviteId: number) => {
  const res = await client.post(`/invites/${inviteId}/decline`);
  return res.data;
};
