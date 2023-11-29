import type { FC, ReactNode } from "react";

export const PageHeading: FC<{ children: ReactNode }> = ({ children }) => (
  <h1 className="text-center font-bold text-lg">{children}</h1>
);
