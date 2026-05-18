import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const current =
    languages.find((l) => l.code === i18n.language) ?? languages[0];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-lg leading-none"
      >
        {current.flag}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 hover:bg-gray-50 transition ${
                lang.code === i18n.language
                  ? "font-medium text-gray-900"
                  : "text-gray-600"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
