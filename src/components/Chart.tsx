import type { DecodedSensorReadingData } from "@/types";
import { FC } from "react";
import Chart from "react-google-charts";

export const CustomChart: FC<{ data: DecodedSensorReadingData }> = ({
  data,
}) => (
  <Chart
    chartType="LineChart"
    data={[
      ["Date", "Temperature", "Height", "Speed", "Battery"],
      ...data.map(
        ({ date, payload: { temperature, height, speed, battery } }) => [
          new Date(date).toLocaleDateString(),
          parseInt(temperature, 10),
          parseInt(height, 10),
          parseInt(speed, 10),
          parseInt(battery, 10),
        ]
      ),
    ]}
    width="100%"
    height="100%"
    options={{
      title: "Data over time",
      curveType: "function",
      legend: { position: "bottom" },
    }}
  />
);
