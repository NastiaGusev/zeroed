import { useTranslation } from "react-i18next";

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
          <div className="flex gap-1.5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguage(lang.code)}
                className={`px-2 py-1 rounded-lg text-xs font-medium transition ${
                  i18n.language === lang.code
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {lang.flag} {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
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
