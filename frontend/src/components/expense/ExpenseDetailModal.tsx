import { useState } from "react";
import type { Expense, GroupMember } from "../../types";
import Modal from "../ui/Modal";
import { formatAmount } from "../../utils/format";
import { useTranslation } from "react-i18next";
import { getCurrencySymbol } from "../../constants/currencies";

interface Props {
  expense: Expense;
  members: GroupMember[];
  isSettled: boolean;
  meId?: number;
  onClose: () => void;
  onDelete: (expenseId: number) => void;
  onAddToSplit: (expenseId: number, userId: number) => void;
  onSaveEdit: (
    expenseId: number,
    description: string,
    memberIds: number[],
    amount: number,
  ) => void;
  isPendingEdit?: boolean;
}

const PencilIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

export default function ExpenseDetailModal({
  expense,
  members,
  isSettled,
  meId,
  onClose,
  onDelete,
  onAddToSplit,
  onSaveEdit,
  isPendingEdit,
}: Props) {
  const { t } = useTranslation();

  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(expense.description);
  const [editMembers, setEditMembers] = useState<number[]>(
    expense.splits.map((s) => s.userId),
  );

  const isOwner = meId === expense.paidBy.id;
  const splitUserIds = expense.splits.map((s) => s.userId);
  const remainingMembers = members.filter(
    (m) => !splitUserIds.includes(m.userId),
  );

  const toggleEditMember = (userId: number) => {
    setEditMembers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };

  const handleSave = () => {
    onSaveEdit(expense.id, editDescription, editMembers, expense.amount);
    setIsEditing(false);
  };

  const title = (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <input
          className="text-lg font-semibold text-gray-900 border-b border-gray-300 focus:outline-none focus:border-black w-full"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          autoFocus
        />
      ) : (
        <span>{expense.description}</span>
      )}
      {isOwner && !isSettled && !isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="text-gray-400 hover:text-gray-700 transition"
          title="Edit expense"
        >
          <PencilIcon />
        </button>
      )}
    </div>
  );

  return (
    <Modal title={title} onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">{t("total_amount")}</span>
          <span className="text-xl font-bold text-gray-900">
            {getCurrencySymbol(expense.currency)}
            {formatAmount(expense.amount)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500">{t("paid_by")}</span>
          <span className="font-medium text-gray-900">
            {expense.paidBy.name}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500">{t("date")}</span>
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
            <p className="text-sm text-gray-500">{t("split_between")}</p>
            {!isEditing && (
              <p className="text-sm text-gray-500">
                {getCurrencySymbol(expense.currency)}
                {formatAmount(
                  Number((expense.amount / expense.splits.length).toFixed(2)),
                )}{" "}
                {t("each")}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {isEditing ? (
              members.map((member) => (
                <button
                  key={member.id}
                  onClick={() => toggleEditMember(member.userId)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    editMembers.includes(member.userId)
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {member.user.name}
                </button>
              ))
            ) : (
              <>
                {expense.splits.map((split) => (
                  <span
                    key={split.id}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {split.user.name}
                  </span>
                ))}
                {!isSettled &&
                  isOwner &&
                  remainingMembers.map((member) => (
                    <button
                      key={member.id}
                      onClick={() => onAddToSplit(expense.id, member.userId)}
                      className="border border-dashed border-gray-300 text-gray-400 hover:border-gray-900 hover:text-gray-900 px-3 py-1 rounded-full text-sm transition"
                    >
                      + {member.user.name}
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>

        {isEditing ? (
          <div className="border-t border-gray-100 pt-4 space-y-2">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditDescription(expense.description);
                  setEditMembers(expense.splits.map((s) => s.userId));
                }}
                className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
              >
                {t("cancel")}
              </button>
              <button
                onClick={handleSave}
                disabled={
                  isPendingEdit || !editDescription || editMembers.length === 0
                }
                className="flex-1 bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition disabled:opacity-50"
              >
                {isPendingEdit ? t("saving") : t("save")}
              </button>
            </div>
            <button
              onClick={() => {
                if (confirm(t("delete_expense_confirm"))) {
                  onDelete(expense.id);
                }
              }}
              className="w-full flex items-center justify-center gap-1.5 text-sm text-gray-400 hover:text-red-500 transition py-1"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
              </svg>
              {t("delete_expense")}
            </button>
          </div>
        ) : null}
      </div>
    </Modal>
  );
}
