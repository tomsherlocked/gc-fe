import type { FC, ReactNode } from "react";
import { useState } from "react";

export const Collapsible: FC<{
  children: ReactNode;
  collapsibleTitle: string;
}> = ({ children, collapsibleTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCollapse = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <button
        onClick={handleCollapse}
        className="bg-slate-300 hover:bg-slate-400 rounded-sm p-2 mb-2 w-full"
      >
        {isOpen ? "Hide" : "Show"} {collapsibleTitle}
      </button>
      {isOpen && children}
    </div>
  );
};
