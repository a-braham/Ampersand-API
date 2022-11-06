import { Model, DataTypes } from 'sequelize';
import db from './index';

/**
 * Station Class Model
 */
class Station extends Model {
  public id!: number;
  public serial_number!: string;
  public current_power!: number;
  public bike_id!: number;
  public station_id!: number;
  public total_distance!: number;
  public total_power!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {};
}

Station.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    serial_number: {
      type: DataTypes.STRING
    },
    current_power: {
      type: DataTypes.DOUBLE
    },
    bike_id: {
      type: DataTypes.INTEGER
    },
    station_id: {
      type: DataTypes.INTEGER
    },
    total_distance: {
      type: DataTypes.DOUBLE
    },
    total_power: {
      type: DataTypes.DOUBLE
    },
  },
  {
    sequelize: db.sequelize,
    tableName: 'stations',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Station;
