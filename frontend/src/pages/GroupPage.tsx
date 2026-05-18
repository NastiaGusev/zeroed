import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getGroup, getBalances, settleAll, deleteGroup } from "../api/groups";
import {
  createExpense,
  getExpenses,
  deleteExpense,
  addMemberToExpense,
} from "../api/expenses";
import { sendInvite } from "../api/invites";
import { getMe } from "../api/auth";
import InviteModal from "../components/InviteModal";
import AddExpenseModal from "../components/AddExpenseModal";
import ExpenseDetailModal from "../components/ExpenseDetailModal";
import type { Transaction } from "../types";

export default function GroupPage() {
  const { id } = useParams();
  const groupId = Number(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [showInvite, setShowInvite] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<number | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const { data: me } = useQuery({ queryKey: ["me"], queryFn: getMe });
  const { data: group, isLoading } = useQuery({
    queryKey: ["group", groupId],
    queryFn: () => getGroup(groupId),
    refetchInterval: 5000,
  });
  const { data: expenses } = useQuery({
    queryKey: ["expenses", groupId],
    queryFn: () => getExpenses(groupId),
    refetchInterval: 1000,
  });
  const { data: balances } = useQuery({
    queryKey: ["balances", groupId],
    queryFn: () => getBalances(groupId),
    refetchInterval: 1000,
  });

  const isSettled = !!group?.settledAt;
  const myOwed = balances?.filter((t) => t.to.id === me?.id) ?? [];
  const myDebts = balances?.filter((t) => t.from.id === me?.id) ?? [];
  const totalOwedToMe = myOwed.reduce((sum, t) => sum + t.amount, 0);
  const totalIOwe = myDebts.reduce((sum, t) => sum + t.amount, 0);

  const invalidateExpenses = () => {
    queryClient.invalidateQueries({ queryKey: ["expenses", groupId] });
    queryClient.invalidateQueries({ queryKey: ["balances", groupId] });
  };

  const { mutate: invite, isPending: inviting } = useMutation({
    mutationFn: (email: string) => sendInvite(groupId, email),
    onSuccess: () => {
      setInviteEmail("");
      setShowInvite(false);
    },
  });

  const { mutate: addExpense, isPending: addingExpense } = useMutation({
    mutationFn: () =>
      createExpense(groupId, description, Number(amount), selectedMembers),
    onSuccess: () => {
      invalidateExpenses();
      setDescription("");
      setAmount("");
      setSelectedMembers([]);
      setShowAddExpense(false);
    },
  });

  const { mutate: settle, isPending: settling } = useMutation({
    mutationFn: () => settleAll(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group", groupId] });
      queryClient.invalidateQueries({ queryKey: ["balances", groupId] });
    },
  });

  const { mutate: removeGroup } = useMutation({
    mutationFn: () => deleteGroup(groupId),
    onSuccess: () => navigate("/dashboard"),
  });

  const { mutate: removeExpense } = useMutation({
    mutationFn: (expenseId: number) => deleteExpense(groupId, expenseId),
    onSuccess: () => {
      invalidateExpenses();
      setSelectedExpense(null);
    },
  });

  const { mutate: addToSplit } = useMutation({
    mutationFn: ({
      expenseId,
      userId,
    }: {
      expenseId: number;
      userId: number;
    }) => addMemberToExpense(groupId, expenseId, userId),
    onSuccess: () => invalidateExpenses(),
  });

  const toggleMember = (userId: number) => {
    setSelectedMembers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-50 overflow-y-auto">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Group not found</p>
      </div>
    );
  }

  const selectedExpenseData = expenses?.find((e) => e.id === selectedExpense);

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-y-auto overscroll-none">
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-400 hover:text-gray-900"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold text-gray-900 flex-1">
            {group.name}
          </h1>
          {isSettled && (
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              Settled ✅
            </span>
          )}
        </div>

        {/* My Balance — shown only after settled */}
        {isSettled && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              My Balance
            </h2>
            {totalOwedToMe === 0 && totalIOwe === 0 ? (
              <p className="text-green-600 font-medium">
                You were zeroed out! ✅
              </p>
            ) : (
              <div className="space-y-2">
                {myOwed.map((t: Transaction, i: number) => (
                  <p key={i} className="text-gray-700">
                    <span className="font-medium text-green-600">
                      {t.from.name}
                    </span>
                    {" owes you "}
                    <span className="font-semibold">₪{t.amount}</span>
                  </p>
                ))}
                {myDebts.map((t: Transaction, i: number) => (
                  <p key={i} className="text-gray-700">
                    {"You owe "}
                    <span className="font-medium text-red-500">
                      {t.to.name}
                    </span>{" "}
                    <span className="font-semibold">₪{t.amount}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Members */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Members
            </h2>
            {!isSettled && (
              <button
                onClick={() => setShowInvite(true)}
                className="text-xs font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition"
              >
                + Invite
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {group.members.map((member) => (
              <span
                key={member.id}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {member.user.name}
              </span>
            ))}
          </div>
        </div>

        {/* Expenses */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Expenses
            </h2>
            {!isSettled && (
              <button
                onClick={() => setShowAddExpense(true)}
                className="text-xs font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition"
              >
                + Add
              </button>
            )}
          </div>
          {expenses && expenses.length > 0 ? (
            <div className="space-y-3">
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  onClick={() => setSelectedExpense(expense.id)}
                  className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2 transition"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {expense.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      Paid by {expense.paidBy.name}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900">
                    ₪{expense.amount}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No expenses yet.</p>
          )}
        </div>

        {/* Delete Group */}
        {me?.id === group.ownerId && (
          <button
            onClick={() => {
              if (confirm("Delete this group? This cannot be undone.")) {
                removeGroup();
              }
            }}
            className="w-full mt-2 text-sm text-red-400 hover:text-red-600 py-2"
          >
            Delete group
          </button>
        )}

        {/* Settle Up */}
        {!isSettled && balances && balances.length > 0 && (
          <button
            onClick={() => {
              if (
                confirm(
                  "Mark this group as fully settled? This cannot be undone.",
                )
              ) {
                settle();
              }
            }}
            disabled={settling}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition disabled:opacity-50 mt-4"
          >
            {settling ? "Settling..." : "Settle Up 💸"}
          </button>
        )}
      </div>

      {/* Modals */}
      {showInvite && (
        <InviteModal
          email={inviteEmail}
          setEmail={setInviteEmail}
          onInvite={invite}
          isPending={inviting}
          onClose={() => setShowInvite(false)}
        />
      )}

      {showAddExpense && (
        <AddExpenseModal
          description={description}
          setDescription={setDescription}
          amount={amount}
          setAmount={setAmount}
          selectedMembers={selectedMembers}
          toggleMember={toggleMember}
          members={group.members}
          onAdd={() => addExpense()}
          isPending={addingExpense}
          onClose={() => setShowAddExpense(false)}
        />
      )}

      {selectedExpenseData && (
        <ExpenseDetailModal
          expense={selectedExpenseData}
          members={group.members}
          isSettled={isSettled}
          meId={me?.id}
          onClose={() => setSelectedExpense(null)}
          onDelete={removeExpense}
          onAddToSplit={(expenseId, userId) =>
            addToSplit({ expenseId, userId })
          }
        />
      )}
    </div>
  );
}
