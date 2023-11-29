import type { FC } from "react";

const COLUMNS: { name: string; className?: string }[] = [
  { name: "Sensor" },
  { name: "Date" },
  { name: "Location", className: "w-20" },
  { name: "Temp" },
  { name: "Height" },
  { name: "Speed" },
  { name: "Battery" },
  { name: "Oxygen" },
  { name: "State" },
];

export const TableHeader: FC = () => (
  <thead>
    <tr>
      {COLUMNS.map(({ name, className }) => (
        <th key={name} className={`w-1/5 px-1 ${className ? className : ""}`}>
          {name}
        </th>
      ))}
    </tr>
  </thead>
);
