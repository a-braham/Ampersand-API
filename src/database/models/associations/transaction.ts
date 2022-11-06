import Battery from 'models/battery';
import Bike from 'models/bike';
import Station from 'models/station';
import Transaction from 'models/transaction';

Transaction.belongsTo(Bike, {
  foreignKey: 'bike_id',
  as: 'bike',
});

Transaction.belongsTo(Station, {
  foreignKey: 'station_id',
  as: 'station',
});

Transaction.belongsTo(Battery, {
  foreignKey: 'old_battery',
  as: 'odlBattery',
});

Transaction.belongsTo(Battery, {
  foreignKey: 'new_battery',
  as: 'newBattery',
});

export {};
