import type { GroupMember } from "../../types";

interface Props {
  members: GroupMember[];
  isSettled: boolean;
  onInvite: () => void;
}

export default function GroupMembers({ members, isSettled, onInvite }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Members
        </h2>
        {!isSettled && (
          <button
            onClick={onInvite}
            className="text-xs font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition"
          >
            + Invite
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {members.map((member) => (
          <span
            key={member.id}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {member.user.name}
          </span>
        ))}
      </div>
    </div>
  );
}
