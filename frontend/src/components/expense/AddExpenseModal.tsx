import type { GroupMember } from "../../types";
import Modal from "../ui/Modal";
import { useTranslation } from "react-i18next";
import { CURRENCIES, getCurrencySymbol } from "../../constants/currencies";
import SelectDropdown from "../ui/SelectDropdown";

interface Props {
  onClose: () => void;
  onAdd: () => void;
  isPending: boolean;
  description: string;
  setDescription: (v: string) => void;
  amount: string;
  setAmount: (v: string) => void;
  currency: string;
  setCurrency: (v: string) => void;
  selectedMembers: number[];
  toggleMember: (id: number) => void;
  members: GroupMember[];
}

export default function AddExpenseModal({
  onClose,
  onAdd,
  isPending,
  description,
  setDescription,
  amount,
  setAmount,
  currency,
  setCurrency,
  selectedMembers,
  toggleMember,
  members,
}: Props) {
  const { t } = useTranslation();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    const parts = raw.split(".");
    const cleaned =
      parts.length > 2 ? parts[0] + "." + parts.slice(1).join("") : raw;
    setAmount(cleaned);
  };

  const displayAmount = amount
    ? Number(amount.replace(/,/g, "")).toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    : "";

  return (
    <Modal title={t("add_expense")} onClose={onClose}>
      <div className="space-y-4">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder={t("description_placeholder")}
          autoFocus
        />

        {/* Amount + Currency */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              {getCurrencySymbol(currency)}
            </span>
            <input
              type="text"
              inputMode="decimal"
              value={displayAmount}
              onChange={handleAmountChange}
              className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="0"
            />
          </div>
          <SelectDropdown
            value={currency}
            onChange={setCurrency}
            options={CURRENCIES.map((c) => ({
              value: c.code,
              label: `${c.symbol} ${c.code}`,
            }))}
            className="text-sm py-2 border-gray-300"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">{t("split_between")}</p>
          <div className="flex flex-wrap gap-2">
            {members.map((member) => (
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
          onClick={onAdd}
          disabled={
            isPending || !description || !amount || selectedMembers.length === 0
          }
          className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
        >
          {isPending ? t("saving") : t("add_expense")}
        </button>
      </div>
    </Modal>
  );
}
