import { celebrate, Joi } from 'celebrate';

export const swap = celebrate({
  body: Joi.object().keys({
    bike_reg_number: Joi.string().required(),
    swap_station_name: Joi.string().required(),
    battery_power_remaining: Joi.number().required(),
    dist_reading: Joi.number().required(),
  }),
});
