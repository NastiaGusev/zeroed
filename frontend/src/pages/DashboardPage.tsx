import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createGroup } from "../api/groups";
import { getUserGroups } from "../api/groups";

export default function DashboardPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [newGroupName, setNewGroupName] = useState("");
  const [groupIdInput, setGroupIdInput] = useState("");

  const { data: userGroups } = useQuery({
    queryKey: ["userGroups"],
    queryFn: getUserGroups,
  });

  const { mutate: createNewGroup, isPending } = useMutation({
    mutationFn: (name: string) => createGroup(name),
    onSuccess: (group) => {
      queryClient.invalidateQueries({ queryKey: ["userGroups"] });
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      setNewGroupName("");
      navigate(`/groups/${group.id}`);
    },
  });

  const handleCreate = () => {
    if (newGroupName.trim()) {
      createNewGroup(newGroupName.trim());
    }
  };

  const handleJoin = () => {
    if (groupIdInput.trim()) {
      navigate(`/groups/${groupIdInput.trim()}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Zeroed 💸</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Logout
          </button>
        </div>

        {/* My Groups */}
        {userGroups && userGroups.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              My Groups
            </h2>
            <div className="space-y-2">
              {userGroups.map(({ group }) => (
                <button
                  key={group.id}
                  onClick={() => navigate(`/groups/${group.id}`)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-between"
                >
                  <span className="font-medium text-gray-900">
                    {group.name}
                  </span>
                  <span className="text-gray-400">→</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Create Group */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Create a group
          </h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Barcelona Trip"
            />
            <button
              onClick={handleCreate}
              disabled={isPending}
              className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
            >
              {isPending ? "..." : "Create"}
            </button>
          </div>
        </div>

        {/* Join Group */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Open a group by ID
          </h2>
          <div className="flex gap-2">
            <input
              type="number"
              value={groupIdInput}
              onChange={(e) => setGroupIdInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleJoin()}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Group ID"
            />
            <button
              onClick={handleJoin}
              className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
