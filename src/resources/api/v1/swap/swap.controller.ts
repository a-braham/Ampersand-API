import 'dotenv/config';
import { Request, Response } from 'express';
import { fn, col, Op } from 'sequelize';

import jsonResponse from '../../../../helpers/jsonResponse';
import { OK, BAD_REQUEST } from '../../../../constants/statusCodes';
import Transaction from 'models/transaction';
import Bike from 'models/bike';
import Battery from 'models/battery';
import Station from 'models/station';

export const swap = async (req: Request, res: Response): Promise<Response> => {
  const {
    bike_reg_number: bikeRegNo,
    swap_station_name: swapStationName,
    battery_power_remaining: batteryPower,
    dist_reading: newDistReading,
  } = req.body;

  const station = await Station.findOne({
    where: {
      name: swapStationName,
    },
  });

  if (!station) {
    return jsonResponse({
      res,
      status: BAD_REQUEST,
      message: "We don't have a station by that name!"
    });
  }

  const bike = await Bike.findOne({
    where: {
      reg_number: bikeRegNo,
    },
  });

  if (!bike) {
    return jsonResponse({
      res,
      status: BAD_REQUEST,
      message: "Bike not found, please confirm you have the right registration number!"
    });
  }

  const previousBattery = await Transaction.findOne({
    order: [['created_at', 'DESC']],
    where: {
      bike_id: bike.id,
    },
  });
  
  if (!bike) {
    return jsonResponse({
      res,
      status: BAD_REQUEST,
      message: "This battery has not been logged in!"
    });
  }
  
  

  const previousBatteryPowerReading = previousBattery.new_battery_power_reading;

  const distCovered = Number(newDistReading) - Number(bike.dist_reading);

  const newBattery = await Battery.findAll({
    attributes:['id', [fn('max', col('current_power')), 'current_power']],
    raw: true,
    group: ['id'],
    where: {
      current_power: {
        [Op.gt]: Number(batteryPower),
      },
    },
  }); 

  const usedPower = Number(previousBatteryPowerReading) - Number(batteryPower);

  const cost = usedPower * 12;

  const swapData = {
    old_battery: previousBattery.new_battery,
    new_battery: newBattery[0].id,
    bike_id: bike.id,
    old_battery_power_reading: batteryPower,
    new_battery_power_reading: newBattery[0].current_power, 
    power_used: usedPower,
    amount: cost,
    distance_covered: distCovered,
  };

  await Transaction.create(swapData);

  await bike.update({
    dist_reading: newDistReading,
  });

  await Battery.update(
    {
      station_id: station.id,
      bike_id: bike.id,
    },
    {
      where: { id: Number(newBattery[0].id) },
    },
  );

  return jsonResponse({
    res,
    status: OK,
    message: 'battery swapped',
    data: swapData,
  });
};
