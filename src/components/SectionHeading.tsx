import type { FC, ReactNode } from "react";

export const SectionHeading: FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="m-2 text-center font-semibold">{children}</h2>
);
