import { Model, DataTypes } from 'sequelize';
import db from './index';

/**
 * Transaction Class Model
 */
class Transaction extends Model {
  public id!: number;
  public bike_id!: number;
  public station_id!: number;
  public old_battery!: number;
  public new_battery!: number;
  public amount!: number;
  public new_battery_power_reading!: number;
  public old_battery_power_reading!: number;
  public distance_covered!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {};
}

Transaction.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    bike_id: {
      type: DataTypes.INTEGER
    },
    station_id: {
      type: DataTypes.INTEGER
    },
    old_battery: {
      type: DataTypes.INTEGER
    },
    new_battery: {
      type: DataTypes.INTEGER
    },
    amount: {
      type: DataTypes.DOUBLE
    },
    new_battery_power_reading: {
      type: DataTypes.DOUBLE
    },
    old_battery_power_reading: {
      type: DataTypes.DOUBLE
    },
    distance_covered: {
      type: DataTypes.DOUBLE
    }, 
  },
  {
    sequelize: db.sequelize,
    tableName: 'transactions',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Transaction;
