import type { Expense } from "../../types";
import { formatAmount } from "../../utils/format";
import { useTranslation } from "react-i18next";
import { getCurrencySymbol } from "../../constants/currencies";

interface Props {
  expenses: Expense[];
  isSettled: boolean;
  onAdd: () => void;
  onSelect: (id: number) => void;
}

export default function GroupExpenses({
  expenses,
  isSettled,
  onAdd,
  onSelect,
}: Props) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          {t("expenses")}
        </h2>
        {!isSettled && (
          <button
            onClick={onAdd}
            className="text-xs font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition"
          >
            {t("add")}
          </button>
        )}
      </div>
      {expenses.length > 0 ? (
        <div className="space-y-3">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              onClick={() => onSelect(expense.id)}
              className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2 transition"
            >
              <div>
                <p className="font-medium text-gray-900">
                  {expense.description}
                </p>
                <p className="text-sm text-gray-500">
                  {t("paid_by")} {expense.paidBy.name}
                </p>
              </div>
              <p className="font-semibold text-gray-900">
                {getCurrencySymbol(expense.currency)}
                {formatAmount(expense.amount)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">{t("no_expenses")}</p>
      )}
    </div>
  );
}
