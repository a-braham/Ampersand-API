const dayjs = require("dayjs");

const created_at = dayjs("2022-10-06").format();
const updated_at = created_at;

module.exports = [
  {
    bike_id: 1,
    station_id: null,
    new_battery: 1,
    new_battery_power_reading: 100,
    created_at: created_at,
    updated_at: updated_at
  }
];
