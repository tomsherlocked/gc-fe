import type { FC } from "react";

export const ResetButton: FC<{ clear: () => void }> = ({ clear }) => (
  <div>
    <button
      onClick={clear}
      className="bg-slate-300 hover:bg-slate-400 rounded-sm p-2 mb-2 w-full"
    >
      Reset filters
    </button>
  </div>
);
