import type { GroupMember } from "../types";
import Modal from "./Modal";

interface Props {
  onClose: () => void;
  onAdd: () => void;
  isPending: boolean;
  description: string;
  setDescription: (v: string) => void;
  amount: string;
  setAmount: (v: string) => void;
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
  selectedMembers,
  toggleMember,
  members,
}: Props) {
  return (
    <Modal title="Add expense" onClose={onClose}>
      <div className="space-y-4">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Description (e.g. Dinner)"
          autoFocus
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Amount (₪)"
        />
        <div>
          <p className="text-sm text-gray-500 mb-2">Split between:</p>
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
          {isPending ? "Adding..." : "Add expense"}
        </button>
      </div>
    </Modal>
  );
}
