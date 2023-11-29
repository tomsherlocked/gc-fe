export type SensorReadingRow = {
  id: string;
  direction: "MO";
  transmittedAt: {
    unix: number;
    iso: string;
  };
  latitude: string;
  longitude: string;
  sensorId: string;
  payload: string;
  bytes: number;
};
export type SensorReadingData = SensorReadingRow[];

export type DecodedPayload = {
  temperature: {
    value: number;
    unit: "C";
  };
  height: {
    value: string;
    unit: "M";
  };
  speed: {
    value: string;
    unit: "M/s";
  };
  battery: {
    value: number;
    unit: "%";
  };
  alarm: boolean;
  state: "Rising" | "Falling" | "Constant";
  oxygen: {
    value: number;
    unit: "mg/L";
  };
};

export type DecodedSensorReadingRow = Pick<SensorReadingRow, "id"> & {
  date: string;
  location: string;
  payload: {
    temperature: string;
    height: string;
    speed: string;
    battery: string;
    oxygen: string;
  } & Pick<DecodedPayload, "alarm" | "state">;
};

export type DecodedSensorReadingData = DecodedSensorReadingRow[];

export type SensorQueryParams = keyof Pick<
  DecodedSensorReadingRow["payload"],
  "height" | "speed" | "battery" | "oxygen" | "temperature"
>;

export type Routes = "/" | "/visualisation";

export type RouterMapType = {
  [key in Routes]: {
    label: string;
    href: string;
  };
};

export type FiltersType = {
  visibleRows: number;
  state?: "Falling" | "Rising" | "Constant";
  alarm?: boolean;
  Height?: [number, number];
  Speed?: [number, number];
  Battery?: [number];
};
