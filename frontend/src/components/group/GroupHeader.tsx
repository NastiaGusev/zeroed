interface Props {
  name: string;
  isSettled: boolean;
  isOwner: boolean;
  isEditing: boolean;
  editName: string;
  setEditName: (v: string) => void;
  onEditStart: () => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
  isSaving: boolean;
  onBack: () => void;
}

function PencilIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

export default function GroupHeader({
  name,
  isSettled,
  isOwner,
  isEditing,
  editName,
  setEditName,
  onEditStart,
  onSave,
  onCancel,
  onDelete,
  isSaving,
  onBack,
}: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="text-gray-400 hover:text-gray-900">
          ←
        </button>

        {isEditing ? (
          <input
            className="text-2xl font-bold text-gray-900 flex-1 border-b border-gray-300 focus:outline-none focus:border-black bg-transparent"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            autoFocus
          />
        ) : (
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            {isOwner && !isSettled && (
              <button
                onClick={onEditStart}
                className="text-gray-400 hover:text-gray-700 transition"
              >
                <PencilIcon />
              </button>
            )}
          </div>
        )}

        {isSettled && (
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            Settled ✅
          </span>
        )}
      </div>

      {isEditing && (
        <div className="mt-3 space-y-2">
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              disabled={isSaving || !editName}
              className="flex-1 bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
          <button
            onClick={onDelete}
            className="w-full flex items-center justify-center gap-1.5 text-sm text-gray-400 hover:text-red-500 transition py-1"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
            Delete group
          </button>
        </div>
      )}
    </div>
  );
}
