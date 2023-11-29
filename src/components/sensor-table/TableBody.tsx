import type { DecodedSensorReadingData } from "@/types";
import type { FC } from "react";

export const TableBody: FC<{ data: DecodedSensorReadingData }> = ({ data }) => (
  <tbody>
    {data.map(
      ({
        date,
        location,
        payload: { temperature, height, speed, battery, oxygen, alarm, state },
        id,
      }) => {
        return (
          <tr
            key={id}
            className={`border-b-2 border-gray-500 h-10 text-center ${
              alarm ? "bg-red-400" : "bg-green-400"
            }`}
          >
            <td>{id}</td>
            <td>{new Date(date).toLocaleString("en-GB")}</td>
            <td>{location}</td>
            <td>{temperature}</td>
            <td>{height}</td>
            <td>{speed}</td>
            <td>{battery}</td>
            <td>{oxygen}</td>
            <td>{state}</td>
          </tr>
        );
      }
    )}
  </tbody>
);
