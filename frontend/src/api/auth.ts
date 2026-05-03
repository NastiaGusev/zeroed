import client from "./client";

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  const res = await client.post("/auth/register", { name, email, password });
  return res.data as { access_token: string };
};

export const login = async (email: string, password: string) => {
  const res = await client.post("/auth/login", { email, password });
  return res.data as { access_token: string };
};

export const getMe = async () => {
  const res = await client.get("/auth/me");
  return res.data as { id: number; name: string; email: string };
};
