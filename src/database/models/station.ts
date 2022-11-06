import { Model, DataTypes } from 'sequelize';
import db from './index';

/**
 * Station Class Model
 */
class Station extends Model {
  public id!: number;
  public name!: string;
  public location!: string;

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
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
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
