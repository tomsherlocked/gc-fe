import type { NextApiRequest, NextApiResponse } from "next";
import groupedSensorData from "../../../data/groupedSensors.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(groupedSensorData);
}
