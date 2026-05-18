import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createGroup } from "../api/groups";
import { sendInvite } from "../api/invites";
import { useTranslation } from "react-i18next";

export default function CreateGroupPage() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [emails, setEmails] = useState<string[]>([""]);
  const [error, setError] = useState("");

  const { mutate: create, isPending } = useMutation({
    mutationFn: async () => {
      // Step 1 — create the group
      const group = await createGroup(groupName.trim());

      // Step 2 — send invites to all non-empty emails
      const validEmails = emails.filter((e) => e.trim() !== "");
      await Promise.all(
        validEmails.map((email) => sendInvite(group.id, email.trim())),
      );

      return group;
    },
    onSuccess: (group) => {
      navigate(`/groups/${group.id}`);
    },
    onError: () => {
      setError("Something went wrong. Please try again.");
    },
  });

  const addEmailField = () => {
    setEmails((prev) => [...prev, ""]);
  };

  const updateEmail = (index: number, value: string) => {
    setEmails((prev) => prev.map((e, i) => (i === index ? value : e)));
  };

  const removeEmail = (index: number) => {
    setEmails((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCreate = () => {
    if (!groupName.trim()) {
      setError("Please enter a group name");
      return;
    }
    setError("");
    create();
  };

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-y-auto">
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-400 hover:text-gray-900"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {t("new_group_title")}
          </h1>
        </div>

        {/* Group Name */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("group_name")}
          </label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder={t("group_name_placeholder")}
            autoFocus
          />
        </div>

        {/* Invite Members */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-sm font-medium text-gray-700 mb-3">
            {t("invite_members")}{" "}
            <span className="text-gray-400">({t("invite_optional")})</span>
          </h2>
          <div className="space-y-2">
            {emails.map((email, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => updateEmail(index, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="friend@example.com"
                />
                {emails.length > 1 && (
                  <button
                    onClick={() => removeEmail(index)}
                    className="text-gray-400 hover:text-red-500 px-2"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={addEmailField}
            className="mt-3 text-sm text-gray-500 hover:text-gray-900"
          >
            {t("add_another")}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Create Button */}
        <button
          onClick={handleCreate}
          disabled={isPending}
          className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition disabled:opacity-50"
        >
          {isPending ? t("creating") : t("create_group")}
        </button>
      </div>
    </div>
  );
}
