import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserGroups } from "../api/groups";
import { getPendingInvites, acceptInvite, declineInvite } from "../api/invites";
import { getMe } from "../api/auth";
import { useState } from "react";
import Modal from "../components/Modal";

export default function DashboardPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [filter, setFilter] = useState<"all" | "active" | "settled">("all");

  const { data: me } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const { data: userGroups } = useQuery({
    queryKey: ["userGroups"],
    queryFn: getUserGroups,
  });

  const { data: pendingInvites } = useQuery({
    queryKey: ["pendingInvites"],
    queryFn: getPendingInvites,
  });

  const { mutate: accept } = useMutation({
    mutationFn: (inviteId: number) => acceptInvite(inviteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pendingInvites"] });
      queryClient.invalidateQueries({ queryKey: ["userGroups"] });
    },
  });

  const { mutate: decline } = useMutation({
    mutationFn: (inviteId: number) => declineInvite(inviteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pendingInvites"] });
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Zeroed 💸</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Logout
          </button>
        </div>
        <p className="text-gray-500 mb-8">Welcome back, {me?.name}</p>

        {/* Pending Invites */}
        {pendingInvites && pendingInvites.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Pending Invites
            </h2>
            <div className="space-y-3">
              {pendingInvites.map((invite) => (
                <div
                  key={invite.id}
                  className="flex items-center justify-between"
                >
                  <p className="font-medium text-gray-900">
                    {invite.group.name}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => accept(invite.id)}
                      className="text-sm bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => decline(invite.id)}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 transition"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Groups */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              My Groups
            </h2>
            <button
              onClick={() => setShowFilter(true)}
              className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full border transition ${
                filter !== "all"
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-500 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              {filter !== "all"
                ? filter.charAt(0).toUpperCase() + filter.slice(1)
                : "Filter"}
            </button>
          </div>

          {(() => {
            const filtered =
              userGroups?.filter(({ group }) => {
                if (filter === "active") return !group.settledAt;
                if (filter === "settled") return !!group.settledAt;
                return true;
              }) ?? [];

            return filtered.length > 0 ? (
              <div className="space-y-2">
                {filtered.map(({ group }) => (
                  <button
                    key={group.id}
                    onClick={() => navigate(`/groups/${group.id}`)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-900">
                      {group.name}
                    </span>
                    <div className="flex items-center gap-2">
                      {group.settledAt && (
                        <span className="text-xs text-green-600 font-medium">
                          Settled
                        </span>
                      )}
                      <span className="text-gray-400">→</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">
                No {filter !== "all" ? filter : ""} groups.
              </p>
            );
          })()}

          <button
            onClick={() => navigate("/groups/new")}
            className="w-full mt-3 text-sm border border-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            + New Group
          </button>
        </div>
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <Modal title="Filter groups" onClose={() => setShowFilter(false)}>
          <div className="space-y-2">
            {(["all", "active", "settled"] as const).map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setShowFilter(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center justify-between ${
                  filter === f
                    ? "bg-gray-100 font-medium text-gray-900"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="capitalize">
                  {f === "all"
                    ? "All groups"
                    : f === "active"
                      ? "Active only"
                      : "Settled only"}
                </span>
                {filter === f && <span>✓</span>}
              </button>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}
