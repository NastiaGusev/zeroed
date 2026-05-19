import { useTranslation } from "react-i18next";
import { CURRENCIES } from "../constants/currencies";
import { useCurrency } from "../context/UseCurrency";
import SelectDropdown from "./ui/SelectDropdown";

interface Props {
  name: string;
  email: string;
  onLogout: () => void;
  onClose: () => void;
}

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export default function AccountMenu({ name, email, onLogout, onClose }: Props) {
  const { t, i18n } = useTranslation();
  const { displayCurrency, setDisplayCurrency } = useCurrency();

  const handleLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-10 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 w-64 overflow-hidden">
        {/* Avatar + name */}
        <div className="px-5 py-5 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-lg flex-shrink-0">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {name}
            </p>
            <p className="text-xs text-gray-400 truncate">{email}</p>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Language */}
        <div className="px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {t("language")}
          </div>
          <SelectDropdown
            value={i18n.language}
            onChange={handleLanguage}
            options={languages.map((l) => ({
              value: l.code,
              label: `${l.flag} ${l.label}`,
            }))}
            className="text-xs py-1"
          />
        </div>

        <div className="border-t border-gray-100" />

        {/* Display Currency */}
        <div className="px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            {t("currency")}
            <div className="relative group">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400 cursor-help"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-48 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition pointer-events-none z-50 text-center">
                {t("currency_tooltip")}
              </div>
            </div>
          </div>
          <SelectDropdown
            value={displayCurrency}
            onChange={setDisplayCurrency}
            options={CURRENCIES.map((c) => ({
              value: c.code,
              label: `${c.symbol} ${c.code}`,
            }))}
            className="text-xs py-1"
          />
        </div>

        <div className="border-t border-gray-100" />

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full text-left px-5 py-3.5 text-sm text-gray-600 hover:bg-gray-50 transition flex items-center gap-3"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {t("logout")}
        </button>
      </div>
    </>
  );
}
