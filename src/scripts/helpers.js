const formatSensorData = (data) =>
  data
    .map(({ transmittedAt: { iso }, latitude, longitude, id, payload }) => {
      const decodedPayload = JSON.parse(atob(payload));
      const { temperature, height, speed, battery, oxygen, ...restPayload } =
        decodedPayload;
      return {
        id,
        date: iso,
        location: `${latitude}, ${longitude}`,
        payload: {
          temperature: `${temperature.value}${temperature.unit}`,
          height: `${height.value}${height.unit}`,
          speed: `${speed.value}${speed.unit}`,
          battery: `${battery.value}${battery.unit}`,
          oxygen: `${oxygen.value}${oxygen.unit}`,
          ...restPayload,
        },
      };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

module.exports = { formatSensorData };
