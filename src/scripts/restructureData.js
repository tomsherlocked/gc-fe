const fs = require("node:fs");
const { formatSensorData } = require("./helpers");

try {
  const allSensorData = JSON.parse(
    fs.readFileSync("../data/sensors.json", "utf8")
  );

  const result = allSensorData.reduce((acc, row) => {
    const rowSensorId = row.sensorId;
    const rowSensorArr = acc.find((a) => a.sensorId === rowSensorId);

    if (rowSensorArr) {
      // add to existing array
      rowSensorArr.data.push(row);
    } else {
      // add new item to acc
      acc.push({ sensorId: rowSensorId, data: [row] });
    }
    return acc;
  }, []);

  const trimmedResult = result.map((result) => ({
    ...result,
    data: formatSensorData(result.data.slice(0, 20)),
  }));

  fs.writeFileSync(
    "../data/groupedSensors.json",
    JSON.stringify(trimmedResult),
    "utf8"
  );
} catch (err) {
  console.error(err);
}
