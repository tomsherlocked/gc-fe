import type { FC, ReactNode } from "react";

export const SubHeading: FC<{ children: ReactNode }> = ({ children }) => (
  <h4 className="text-center mb-2 font-semibold">{children}</h4>
);
