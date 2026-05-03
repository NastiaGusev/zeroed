export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Group {
  id: number;
  name: string;
  ownerId: number;
  createdAt: string;
  members: GroupMember[];
  expenses: Expense[];
}

export interface GroupMember {
  id: number;
  userId: number;
  groupId: number;
  user: User;
}

export interface Expense {
  id: number;
  description: string;
  amount: number;
  date: string;
  paidBy: User;
  splits: ExpenseSplit[];
}

export interface ExpenseSplit {
  id: number;
  amount: number;
  userId: number;
  user: User;
}

export interface Transaction {
  from: { id: number; name: string };
  to: { id: number; name: string };
  amount: number;
}
