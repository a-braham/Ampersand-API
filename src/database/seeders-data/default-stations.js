const dayjs = require("dayjs");

const created_at = dayjs("2022-07-10").format();
const updated_at = created_at;

module.exports = [
  {
    name: "Nyamirambo Petro station",
    location: `45° 46' 52" N 108° 30' 14" W`,
    created_at: created_at,
    updated_at: updated_at
  },
  {
    name: "Down town gas station",
    location: `45° 46.8666' N 108° 30.2333' W`,
    created_at: created_at,
    updated_at: updated_at
  },
];
