import type { Transaction } from "../../types";
import { formatAmount } from "../../utils/format";

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
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        My Balance
      </h2>
      {totalOwedToMe === 0 && totalIOwe === 0 ? (
        <p className="text-green-600 font-medium">You were zeroed out! ✅</p>
      ) : (
        <div className="space-y-2">
          {myOwed.map((t: Transaction, i: number) => (
            <p key={i} className="text-gray-700">
              <span className="font-medium text-green-600">{t.from.name}</span>
              {" owes you "}
              <span className="font-semibold">₪{formatAmount(t.amount)}</span>
            </p>
          ))}
          {myDebts.map((t: Transaction, i: number) => (
            <p key={i} className="text-gray-700">
              {"You owe "}
              <span className="font-medium text-red-500">{t.to.name}</span>{" "}
              <span className="font-semibold">₪{formatAmount(t.amount)}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
