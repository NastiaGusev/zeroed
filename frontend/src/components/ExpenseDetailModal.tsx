import type { Expense, GroupMember } from "../types";
import Modal from "./Modal";
import { formatAmount } from "../utils/format";

interface Props {
  expense: Expense;
  members: GroupMember[];
  isSettled: boolean;
  meId?: number;
  onClose: () => void;
  onDelete: (expenseId: number) => void;
  onAddToSplit: (expenseId: number, userId: number) => void;
}

export default function ExpenseDetailModal({
  expense,
  members,
  isSettled,
  meId,
  onClose,
  onDelete,
  onAddToSplit,
}: Props) {
  const splitUserIds = expense.splits.map((s) => s.userId);
  const remainingMembers = members.filter(
    (m) => !splitUserIds.includes(m.userId),
  );

  return (
    <Modal title={expense.description} onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Total amount</span>
          <span className="text-xl font-bold text-gray-900">
            ₪{formatAmount(expense.amount)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500">Paid by</span>
          <span className="font-medium text-gray-900">
            {expense.paidBy.name}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500">Date</span>
          <span className="text-gray-700">
            {new Date(expense.date).toLocaleDateString("en-IL", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-500">Split between</p>
            <p className="text-sm text-gray-500">
              ₪{(expense.amount / expense.splits.length).toFixed(2)} each
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {expense.splits.map((split) => (
              <span
                key={split.id}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {split.user.name}
              </span>
            ))}
            {!isSettled &&
              remainingMembers.map((member) => (
                <button
                  key={member.id}
                  onClick={() => onAddToSplit(expense.id, member.userId)}
                  className="border border-dashed border-gray-300 text-gray-400 hover:border-gray-900 hover:text-gray-900 px-3 py-1 rounded-full text-sm transition"
                >
                  + {member.user.name}
                </button>
              ))}
          </div>
        </div>

        {meId === expense.paidBy.id && !isSettled && (
          <div className="border-t border-gray-100 pt-4">
            <button
              onClick={() => {
                if (confirm("Delete this expense?")) {
                  onDelete(expense.id);
                }
              }}
              className="w-full text-sm text-red-400 hover:text-red-600 py-2"
            >
              Delete expense
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
