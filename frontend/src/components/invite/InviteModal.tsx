import Modal from "../Modal";
import { useTranslation } from "react-i18next";

interface Props {
  onClose: () => void;
  onInvite: (email: string) => void;
  isPending: boolean;
  email: string;
  setEmail: (email: string) => void;
}

export default function InviteModal({
  onClose,
  onInvite,
  isPending,
  email,
  setEmail,
}: Props) {
  const { t } = useTranslation();
  return (
    <Modal title={t("invite_member")} onClose={onClose}>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder={t("invite_email_placeholder")}
          autoFocus
        />
        <button
          onClick={() => onInvite(email)}
          disabled={isPending || !email}
          className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
        >
          {isPending ? "..." : t("send")}
        </button>
      </div>
    </Modal>
  );
}
