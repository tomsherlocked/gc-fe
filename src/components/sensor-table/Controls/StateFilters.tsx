import { CONTROLS_STATE_OPTIONS } from "@/data/constants";
import type { FC } from "react";

export const StateFilters: FC<{
  handleFilterUpdate: (filterKey: string, value: string) => void;
}> = ({ handleFilterUpdate }) => (
  <div className="flex flex-wrap justify-center">
    {CONTROLS_STATE_OPTIONS.map((option) => (
      <div key={option} className="flex flex-col justify-center">
        <input
          type="radio"
          id={option}
          value={option}
          name="state"
          onClick={() => handleFilterUpdate("state", option)}
        />
        <label htmlFor={option} className="m-1 text-sm">
          {option}
        </label>
      </div>
    ))}
  </div>
);
