import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getGroup, getBalances, settleAll, deleteGroup } from "../api/groups";
import {
  createExpense,
  getExpenses,
  deleteExpense,
  addMemberToExpense,
  updateExpense,
} from "../api/expenses";
import { sendInvite } from "../api/invites";
import { getMe } from "../api/auth";
import InviteModal from "../components/invite/InviteModal";
import AddExpenseModal from "../components/expense/AddExpenseModal";
import ExpenseDetailModal from "../components/expense/ExpenseDetailModal";
import GroupHeader from "../components/group/GroupHeader";
import GroupBalances from "../components/group/GroupBalances";
import GroupMembers from "../components/group/GroupMembers";
import GroupExpenses from "../components/group/GroupExpenses";
import { updateGroup } from "../api/groups";

export default function GroupPage() {
  const { id } = useParams();
  const groupId = Number(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [showInvite, setShowInvite] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<number | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const { data: me } = useQuery({ queryKey: ["me"], queryFn: getMe });
  const { data: group, isLoading } = useQuery({
    queryKey: ["group", groupId],
    queryFn: () => getGroup(groupId),
    refetchInterval: 5000,
  });
  const { data: expenses } = useQuery({
    queryKey: ["expenses", groupId],
    queryFn: () => getExpenses(groupId),
    refetchInterval: 1000,
  });
  const { data: balances } = useQuery({
    queryKey: ["balances", groupId],
    queryFn: () => getBalances(groupId),
    refetchInterval: 1000,
  });

  const isSettled = !!group?.settledAt;
  const myOwed = balances?.filter((t) => t.to.id === me?.id) ?? [];
  const myDebts = balances?.filter((t) => t.from.id === me?.id) ?? [];
  const totalOwedToMe = myOwed.reduce((sum, t) => sum + t.amount, 0);
  const totalIOwe = myDebts.reduce((sum, t) => sum + t.amount, 0);

  const invalidateExpenses = () => {
    queryClient.invalidateQueries({ queryKey: ["expenses", groupId] });
    queryClient.invalidateQueries({ queryKey: ["balances", groupId] });
  };

  const { mutate: invite, isPending: inviting } = useMutation({
    mutationFn: (email: string) => sendInvite(groupId, email),
    onSuccess: () => {
      setInviteEmail("");
      setShowInvite(false);
    },
  });

  const { mutate: addExpense, isPending: addingExpense } = useMutation({
    mutationFn: () =>
      createExpense(groupId, description, Number(amount), selectedMembers),
    onSuccess: () => {
      invalidateExpenses();
      setDescription("");
      setAmount("");
      setSelectedMembers([]);
      setShowAddExpense(false);
    },
  });

  const { mutate: settle, isPending: settling } = useMutation({
    mutationFn: () => settleAll(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group", groupId] });
      queryClient.invalidateQueries({ queryKey: ["balances", groupId] });
    },
  });

  const { mutate: removeGroup } = useMutation({
    mutationFn: () => deleteGroup(groupId),
    onSuccess: () => navigate("/dashboard"),
  });

  const { mutate: removeExpense } = useMutation({
    mutationFn: (expenseId: number) => deleteExpense(groupId, expenseId),
    onSuccess: () => {
      invalidateExpenses();
      setSelectedExpense(null);
    },
  });

  const { mutate: addToSplit } = useMutation({
    mutationFn: ({
      expenseId,
      userId,
    }: {
      expenseId: number;
      userId: number;
    }) => addMemberToExpense(groupId, expenseId, userId),
    onSuccess: () => invalidateExpenses(),
  });

  const toggleMember = (userId: number) => {
    setSelectedMembers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };

  const { mutate: updateExpenseMutation, isPending: updatingExpense } =
    useMutation({
      mutationFn: ({
        expenseId,
        description,
        memberIds,
        amount,
      }: {
        expenseId: number;
        description: string;
        memberIds: number[];
        amount: number;
      }) => updateExpense(groupId, expenseId, description, amount, memberIds),
      onSuccess: () => invalidateExpenses(),
    });

  const [isEditingGroup, setIsEditingGroup] = useState(false);
  const [editGroupName, setEditGroupName] = useState(group?.name ?? "");

  const { mutate: saveGroupName, isPending: savingGroupName } = useMutation({
    mutationFn: () => updateGroup(groupId, editGroupName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group", groupId] });
      setIsEditingGroup(false);
    },
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-50 overflow-y-auto">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Group not found</p>
      </div>
    );
  }

  const selectedExpenseData = expenses?.find((e) => e.id === selectedExpense);

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-y-auto overscroll-none">
      <div className="max-w-lg mx-auto px-4 py-8">
        <GroupHeader
          name={group.name}
          isSettled={isSettled}
          isOwner={me?.id === group.ownerId}
          isEditing={isEditingGroup}
          editName={editGroupName}
          setEditName={setEditGroupName}
          onEditStart={() => {
            setEditGroupName(group.name);
            setIsEditingGroup(true);
          }}
          onSave={() => saveGroupName()}
          onCancel={() => setIsEditingGroup(false)}
          onDelete={() => {
            if (confirm("Delete this group? This cannot be undone.")) {
              removeGroup();
            }
          }}
          isSaving={savingGroupName}
          onBack={() => navigate("/dashboard")}
        />

        {isSettled && (
          <GroupBalances
            myOwed={myOwed}
            myDebts={myDebts}
            totalOwedToMe={totalOwedToMe}
            totalIOwe={totalIOwe}
          />
        )}

        <GroupMembers
          members={group.members}
          isSettled={isSettled}
          onInvite={() => setShowInvite(true)}
        />

        <GroupExpenses
          expenses={expenses ?? []}
          isSettled={isSettled}
          onAdd={() => setShowAddExpense(true)}
          onSelect={(id) => setSelectedExpense(id)}
        />

        {!isSettled && balances && balances.length > 0 && (
          <button
            onClick={() => {
              if (
                confirm(
                  "Mark this group as fully settled? This cannot be undone.",
                )
              ) {
                settle();
              }
            }}
            disabled={settling}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition disabled:opacity-50 mt-4"
          >
            {settling ? "Settling..." : "Settle Up 💸"}
          </button>
        )}
      </div>

      {showInvite && (
        <InviteModal
          email={inviteEmail}
          setEmail={setInviteEmail}
          onInvite={invite}
          isPending={inviting}
          onClose={() => setShowInvite(false)}
        />
      )}

      {showAddExpense && (
        <AddExpenseModal
          description={description}
          setDescription={setDescription}
          amount={amount}
          setAmount={setAmount}
          selectedMembers={selectedMembers}
          toggleMember={toggleMember}
          members={group.members}
          onAdd={() => addExpense()}
          isPending={addingExpense}
          onClose={() => {
            setShowAddExpense(false);
            setDescription("");
            setAmount("");
            setSelectedMembers([]);
          }}
        />
      )}

      {selectedExpenseData && (
        <ExpenseDetailModal
          expense={selectedExpenseData}
          members={group.members}
          isSettled={isSettled}
          meId={me?.id}
          onClose={() => setSelectedExpense(null)}
          onDelete={removeExpense}
          onAddToSplit={(expenseId, userId) =>
            addToSplit({ expenseId, userId })
          }
          onSaveEdit={(expenseId, description, memberIds, amount) =>
            updateExpenseMutation({ expenseId, description, memberIds, amount })
          }
          isPendingEdit={updatingExpense}
        />
      )}
    </div>
  );
}
