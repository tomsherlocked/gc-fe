import { DEFAULT_TABLE_ROWS } from "@/data/constants";
import { FiltersType } from "@/types";
import type { FC } from "react";

export const RowsFilters: FC<{
  filters: FiltersType;
  handleFilterUpdate: (filterKey: string, value: number) => void;
}> = ({ filters, handleFilterUpdate }) => (
  <>
    <input
      className="w-full rounded-sm"
      type="number"
      value={filters.visibleRows}
      onChange={(event) =>
        handleFilterUpdate("visibleRows", Number(event.target.value))
      }
    />
    <button
      className="w-full rounded-md p-1 font-semibold bg-white my-2 hover:bg-gray-200"
      onClick={() =>
        handleFilterUpdate("visibleRows", filters.visibleRows + 100)
      }
    >
      Add 100
    </button>
    {filters.visibleRows !== DEFAULT_TABLE_ROWS && (
      <button
        className="w-full rounded-md p-1 font-semibold bg-white my-2 hover:bg-gray-200"
        onClick={() => handleFilterUpdate("visibleRows", DEFAULT_TABLE_ROWS)}
      >
        Reset
      </button>
    )}
  </>
);
