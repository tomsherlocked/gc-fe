# Ground Control Frontend
### Implementation details

- Built with NextJs/React/Tailwind
- 2 API routes to serve up data;
  - `/api/sensors` - serves up formatted sensor data. Pass a query string to filter the data further. Uses `src\data\sensors.json` as the datastore
  - `/api/sensors/grouped` - serves up a limited subset of formatted sensor data. Uses `src\data\groupedSensors.json` as the datastore
- A basic script is used to generate `groupedSensors.json` in `restructureData.js`. This;
  - imports the full sensor data
  - groups the data together by sensor id, unencodes the payload.
  - Returns only the first 20 rows for each sensor
- There's 2 pages:

  - `/`: homepage showing tabular data with filters, etc
  - `/visualisation`: map page showing the sensors on the map. Click on a sensor to view a chart of it's recent data.

- `react-query` handles the data fetching, which allows for caching based on a `queryKey` - for the sensors table this is based on the current filters.
- `useDebounce` is a basic hook used to debounce the search term

### Libraries used

- `react-query` to provide data fetching utilities
- `react-range-slider-input` for quick double-ended sliders
- `react-leaflet` to render the map
- `react-google-charts` to render a basic graph from the data

### Further improvements

- Implement "View previous locations" functionality on the map page. I got short on time here but ideally pressing this button would update the map to show every location the selected sensor was at.
- Clean up the filtering logic in `filterSensorData` - at the moment it's fairly basic and just loads the dataset into JSON before filtering. Ideally this would be stored in a more query-able database or store.
- Implement pagination for tabular data.
