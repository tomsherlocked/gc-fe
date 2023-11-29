import { formatSensorData } from "@/scripts/helpers";
import type {
  DecodedSensorReadingData,
  SensorQueryParams,
  SensorReadingData,
} from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import fullSensorData from "../../../data/sensors.json";

const isSliderFilter = (param: string) =>
  param.endsWith("[0]") || param.endsWith("[1]");

const filterSensorData = ({ visibleRows, ...rest }: any) => {
  const formatted: DecodedSensorReadingData = formatSensorData(
    fullSensorData as SensorReadingData
  );
  const filtered = formatted.filter(({ payload }) =>
    Object.entries(rest).every(([filterKey, filterValue]: [string, any]) => {
      {
        if (filterValue.length === 0) {
          return true;
        } else if (isSliderFilter(filterKey)) {
          const trimmedParam = filterKey.slice(0, -3).toLowerCase(); // remove [x] from arr
          const payloadValue = parseInt(
            payload[trimmedParam as SensorQueryParams],
            10
          );

          return filterKey.endsWith("[0]")
            ? payloadValue > filterValue
            : payloadValue < filterValue;
        }
        return filterValue.includes(payload[filterKey as SensorQueryParams]);
      }
    })
  );
  return filtered.slice(0, visibleRows);
};

export default function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<DecodedSensorReadingData>
) {
  res.status(200).json(filterSensorData(query));
}
