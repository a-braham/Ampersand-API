import Battery from 'models/battery';
import Bike from 'models/bike';
import Station from 'models/station';

Battery.belongsTo(Bike, {
  foreignKey: 'bike_id',
  as: 'bike',
});

Battery.belongsTo(Station, {
  foreignKey: 'station_id',
  as: 'station',
});

export {};
