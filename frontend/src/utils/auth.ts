import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  sub: number;
  email: string;
}

export function getCurrentUser(): TokenPayload | null {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return jwtDecode<TokenPayload>(token);
}
