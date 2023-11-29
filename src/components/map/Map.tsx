import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "./Marker";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import type { DecodedSensorReadingData } from "@/types";

export const Map: FC = () => {
  const { data } = useQuery({
    queryKey: ["groupedSensors"],
    queryFn: () => fetch("/api/sensors/grouped").then((res) => res.json()),
  });
  return (
    <div className="h-[calc(100vh-6rem)] top-24 relative">
      <div className="my-2 text-xs md:text-sm">
        <p>
          This uses a subset of the main dataset - you can view most recent
          sensor locations on the map below
        </p>
        <p>
          Click a sensor to view key stats, then{" "}
          <s>
            click &quot;View previous locations&quot; to update the map to show
            the selected sensors location history.
          </s>{" "}
          (Coming soon!)
        </p>
      </div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={7}
        scrollWheelZoom={false}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data?.map(
          ({
            sensorId,
            data,
          }: {
            sensorId: string;
            data: DecodedSensorReadingData;
          }) => {
            const lastKnownLocation = data[data?.length - 1].location;
            return (
              <Marker
                location={lastKnownLocation}
                key={sensorId}
                data={data}
                sensorId={sensorId}
              />
            );
          }
        )}
      </MapContainer>
    </div>
  );
};
