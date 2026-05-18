import type { Transaction } from "../../types";
import { formatAmount } from "../../utils/format";
import { useTranslation } from "react-i18next";

interface Props {
  myOwed: Transaction[];
  myDebts: Transaction[];
  totalOwedToMe: number;
  totalIOwe: number;
}

export default function GroupBalances({
  myOwed,
  myDebts,
  totalOwedToMe,
  totalIOwe,
}: Props) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        {t("my_balance")}
      </h2>
      {totalOwedToMe === 0 && totalIOwe === 0 ? (
        <p className="text-green-600 font-medium">{t("zeroed_out")}</p>
      ) : (
        <div className="space-y-2">
          {myOwed.map((transaction: Transaction, i: number) => (
            <p key={i} className="text-gray-700">
              <span className="font-medium text-green-600">
                {transaction.from.name}
              </span>{" "}
              {t("owes_you")}{" "}
              <span className="font-semibold">
                ₪{formatAmount(transaction.amount)}
              </span>
            </p>
          ))}
          {myDebts.map((transaction: Transaction, i: number) => (
            <p key={i} className="text-gray-700">
              {t("you_owe")}{" "}
              <span className="font-medium text-red-500">
                {transaction.to.name}
              </span>{" "}
              <span className="font-semibold">
                ₪{formatAmount(transaction.amount)}
              </span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
