import type { DecodedSensorReadingData } from "@/types";
import type { FC } from "react";
import { CustomChart as Chart } from "../Chart";
import { Marker as LeafletMarker, Popup as LeafletPopup } from "react-leaflet";
import { SubHeading } from "../SubHeading";

// struck for time - will leave as a TODO for future
const handleButtonPress = () =>
  alert(
    "clicking this would zoom to location, show all previous locations of this sensor"
  );

export const Marker: FC<{
  location: string;
  sensorId: string;
  data: DecodedSensorReadingData;
}> = ({ location, sensorId, data }) => {
  const [lat, long] = location.split(",");
  return (
    <LeafletMarker position={[Number(lat), Number(long)]}>
      <LeafletPopup>
        <div className="flex flex-col items-center h-[300px]">
          <SubHeading>Sensor: {sensorId}</SubHeading>
          <Chart data={data} />
          <button
            onClick={handleButtonPress}
            className="bg-slate-300 hover:bg-slate-400 rounded-sm p-2 my-2 w-1/2"
          >
            See previous locations
          </button>
        </div>
      </LeafletPopup>
    </LeafletMarker>
  );
};
