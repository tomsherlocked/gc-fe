import type { FC } from "react";

export const Message: FC<{ label: string }> = ({ label }) => <p>{label}</p>;
