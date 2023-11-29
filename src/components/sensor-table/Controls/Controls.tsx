import { DEFAULT_TABLE_ROWS } from "@/data/constants";
import type { FiltersType } from "@/types";
import { Dispatch, FC, SetStateAction } from "react";
import "react-range-slider-input/dist/style.css";
import { Collapsible } from "../../Collapsible";
import { SubHeading } from "../../SubHeading";
import { AlarmFilters } from "./AlarmFilters";
import { PayloadFilters } from "./PayloadFilters";
import { ResetButton } from "./ResetButton";
import { RowsFilters } from "./RowsFilters";
import { StateFilters } from "./StateFilters";

export const Controls: FC<{
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
}> = ({ filters, setFilters }) => {
  const handleFilterUpdate = (filterKey: string, value: any) => {
    const updatedFilters = { ...filters, [filterKey]: value };
    setFilters(updatedFilters);
  };
  const handleClearFilters = () =>
    setFilters({ visibleRows: DEFAULT_TABLE_ROWS });
  return (
    <aside className="relative md:sticky top-0 mt-[26px] text-sm md:text-base md:h-10">
      {JSON.stringify(filters)}
      <Collapsible collapsibleTitle="filters">
        <ResetButton clear={handleClearFilters} />
        <div className="bg-slate-300 rounded-sm p-2 mb-2">
          <SubHeading>State:</SubHeading>
          <StateFilters handleFilterUpdate={handleFilterUpdate} />
        </div>
        <div className="bg-slate-300 rounded-sm p-2 mb-2">
          <SubHeading>Alarm state:</SubHeading>
          <AlarmFilters handleFilterUpdate={handleFilterUpdate} />
        </div>
        <div className="bg-slate-300 rounded-sm p-2 mb-2">
          <SubHeading>Payload value</SubHeading>
          <PayloadFilters
            filters={filters}
            handleFilterUpdate={handleFilterUpdate}
          />
        </div>
        <div className="bg-slate-300 rounded-sm p-2 mb-2">
          <SubHeading>Rows</SubHeading>
          <p>Max number of rows to show:</p>
          <RowsFilters
            filters={filters}
            handleFilterUpdate={handleFilterUpdate}
          />
        </div>
      </Collapsible>
    </aside>
  );
};
