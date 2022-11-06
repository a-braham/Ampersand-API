const dayjs = require("dayjs");

const created_at = dayjs("2022-10-06").format();
const updated_at = created_at;

module.exports = [
  {
    phone_number: "250780000000",
    password: "pass@test1",
    id_number: "56746956430794689",
    email: "johndoe@email.com",
    first_name: "John",
    last_name: "Doe",
    status: "active",
    created_at: created_at,
    updated_at: updated_at
  },
  {
    phone_number: "250780000001",
    password: "pass@test2",
    id_number: "56574576430794689",
    email: "janedoe@email.com",
    first_name: "Jane",
    last_name: "Doe",
    status: "active",
    created_at: created_at,
    updated_at: updated_at
  },
];
