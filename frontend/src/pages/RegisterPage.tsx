import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/auth";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { access_token } = await register(name, email, password, phone);
      localStorage.setItem("token", access_token);
      navigate("/dashboard");
    } catch {
      setError(t("something_went_wrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center px-4 overflow-y-auto">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md">
        <div className="flex justify-end mb-2">
          <LanguageSwitcher />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Zeroed 💸</h1>
        <p className="text-gray-500 mb-8">{t("ragister_tagline")}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("name")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("phone")}{" "}
              <span className="text-gray-400 text-xs">
                ({t("phone_optional")})
              </span>
            </label>
            <input
              type="tel"
              placeholder="05XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("password")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••"
              required
              minLength={6}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? t("creating_account") : t("create_account")}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          {t("already_have_account")}{" "}
          <Link to="/login" className="text-black font-medium underline">
            {t("login")}
          </Link>
        </p>
      </div>
    </div>
  );
}
