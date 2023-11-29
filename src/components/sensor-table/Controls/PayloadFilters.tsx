import { CONTROLS_SLIDER_OPTIONS } from "@/data/constants";
import type { FiltersType } from "@/types";
import type { FC } from "react";
import RangeSlider from "react-range-slider-input";

export const PayloadFilters: FC<{
  filters: FiltersType;
  handleFilterUpdate: (filterKey: string, value: InputEvent) => void;
}> = ({ filters, handleFilterUpdate }) => {
  return (
    <>
      {CONTROLS_SLIDER_OPTIONS.map((option) => (
        <div key={option}>
          <p className="mt-4 mb-2">{option}: </p>
          <RangeSlider
            min={0}
            max={50}
            onInput={(e: InputEvent) => handleFilterUpdate(option, e)}
            value={filters[option as keyof FiltersType] || [0, 50]}
          />
        </div>
      ))}
    </>
  );
};
