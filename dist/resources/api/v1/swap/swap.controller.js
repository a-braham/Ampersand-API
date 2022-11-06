"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swap = void 0;
require("dotenv/config");
var _sequelize = require("sequelize");
var _jsonResponse = _interopRequireDefault(require("../../../../helpers/jsonResponse"));
var _statusCodes = require("../../../../constants/statusCodes");
var _transaction = _interopRequireDefault(require("../../../../database/models/transaction"));
var _bike = _interopRequireDefault(require("../../../../database/models/bike"));
var _battery = _interopRequireDefault(require("../../../../database/models/battery"));
var _station = _interopRequireDefault(require("../../../../database/models/station"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const swap = async (req, res) => {
  const {
    bike_reg_number: bikeRegNo,
    swap_station_name: swapStationName,
    battery_power_remaining: batteryPower,
    dist_reading: newDistReading
  } = req.body;
  const station = await _station.default.findOne({
    where: {
      name: swapStationName
    }
  });
  if (!station) {
    return (0, _jsonResponse.default)({
      res,
      status: _statusCodes.BAD_REQUEST,
      message: "We don't have a station by that name!"
    });
  }
  const bike = await _bike.default.findOne({
    where: {
      reg_number: bikeRegNo
    }
  });
  if (!bike) {
    return (0, _jsonResponse.default)({
      res,
      status: _statusCodes.BAD_REQUEST,
      message: "Bike not found, please confirm you have the right registration number!"
    });
  }
  const previousBattery = await _transaction.default.findOne({
    order: [['created_at', 'DESC']],
    where: {
      bike_id: bike.id
    }
  });
  if (!bike) {
    return (0, _jsonResponse.default)({
      res,
      status: _statusCodes.BAD_REQUEST,
      message: "This battery has not been logged in!"
    });
  }
  const previousBatteryPowerReading = previousBattery.new_battery_power_reading;
  const distCovered = Number(newDistReading) - Number(bike.dist_reading);
  const newBattery = await _battery.default.findAll({
    attributes: ['id', [(0, _sequelize.fn)('max', (0, _sequelize.col)('current_power')), 'current_power']],
    raw: true,
    group: ['id'],
    where: {
      current_power: {
        [_sequelize.Op.gt]: Number(batteryPower)
      }
    }
  });
  const usedPower = Number(previousBatteryPowerReading) - Number(batteryPower);
  console.log(bike, '>>>>>>>>>>>>>>>', newDistReading);
  const cost = usedPower * 12;
  const swapData = {
    old_battery: previousBattery.new_battery,
    new_battery: newBattery[0].id,
    bike_id: bike.id,
    old_battery_power_reading: batteryPower,
    new_battery_power_reading: newBattery[0].current_power,
    power_used: usedPower,
    amount: cost,
    distance_covered: distCovered
  };
  await _transaction.default.create(swapData);
  await bike.update({
    dist_reading: newDistReading
  });
  await _battery.default.update({
    station_id: station.id,
    bike_id: bike.id
  }, {
    where: {
      id: Number(newBattery[0].id)
    }
  });
  return (0, _jsonResponse.default)({
    res,
    status: _statusCodes.OK,
    message: 'battery swapped',
    data: swapData
  });
};
exports.swap = swap;