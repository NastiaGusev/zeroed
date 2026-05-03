import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getGroup, getBalances, settleDebt } from "../api/groups";
import { createExpense, getExpenses } from "../api/expenses";

export default function GroupPage() {
  const { id } = useParams();
  const groupId = Number(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [showAddExpense, setShowAddExpense] = useState(false);

  const { data: group, isLoading: groupLoading } = useQuery({
    queryKey: ["group", groupId],
    queryFn: () => getGroup(groupId),
  });

  const { data: expenses } = useQuery({
    queryKey: ["expenses", groupId],
    queryFn: () => getExpenses(groupId),
  });

  const { data: balances } = useQuery({
    queryKey: ["balances", groupId],
    queryFn: () => getBalances(groupId),
  });

  const { mutate: addExpense, isPending: addingExpense } = useMutation({
    mutationFn: () =>
      createExpense(groupId, description, Number(amount), selectedMembers),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses", groupId] });
      queryClient.invalidateQueries({ queryKey: ["balances", groupId] });
      setDescription("");
      setAmount("");
      setSelectedMembers([]);
      setShowAddExpense(false);
    },
  });

  const { mutate: settle } = useMutation({
    mutationFn: ({ toUserId, amount }: { toUserId: number; amount: number }) =>
      settleDebt(groupId, toUserId, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["balances", groupId] });
    },
  });

  const toggleMember = (userId: number) => {
    setSelectedMembers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };

  if (groupLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Group not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-400 hover:text-gray-900"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{group.name}</h1>
        </div>

        {/* Members */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Members
          </h2>
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

        {/* Balances */}
        {balances && balances.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Who owes who
            </h2>
            <div className="space-y-3">
              {balances.map((t, i) => (
                <div key={i} className="flex items-center justify-between">
                  <p className="text-gray-700">
                    <span className="font-medium">{t.from.name}</span>
                    {" → "}
                    <span className="font-medium">{t.to.name}</span>
                    <span className="text-gray-500"> ₪{t.amount}</span>
                  </p>
                  <button
                    onClick={() =>
                      settle({ toUserId: t.to.id, amount: t.amount })
                    }
                    className="text-xs text-green-600 font-medium hover:underline"
                  >
                    Settle
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {balances && balances.length === 0 && (
          <div className="bg-green-50 rounded-2xl p-6 mb-4 text-center">
            <p className="text-green-700 font-medium">✅ All settled up!</p>
          </div>
        )}

        {/* Add Expense */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Add expense
            </h2>
            <button
              onClick={() => setShowAddExpense(!showAddExpense)}
              className="text-sm text-black font-medium"
            >
              {showAddExpense ? "Cancel" : "+ Add"}
            </button>
          </div>

          {showAddExpense && (
            <div className="space-y-3">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Description (e.g. Dinner)"
              />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Amount (₪)"
              />
              <div>
                <p className="text-sm text-gray-500 mb-2">Split between:</p>
                <div className="flex flex-wrap gap-2">
                  {group.members.map((member) => (
                    <button
                      key={member.id}
                      onClick={() => toggleMember(member.userId)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                        selectedMembers.includes(member.userId)
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {member.user.name}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => addExpense()}
                disabled={
                  addingExpense ||
                  !description ||
                  !amount ||
                  selectedMembers.length === 0
                }
                className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
              >
                {addingExpense ? "Adding..." : "Add expense"}
              </button>
            </div>
          )}
        </div>

        {/* Expenses List */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Expenses
          </h2>
          {expenses && expenses.length > 0 ? (
            <div className="space-y-3">
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
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
      </div>
    </div>
  );
}
