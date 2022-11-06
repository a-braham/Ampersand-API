import { Model, DataTypes } from 'sequelize';
import db from './index';

/**
 * Bike Class Model
 */
class Bike extends Model {
  public id!: number;
  public reg_number!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {};
}

Bike.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    reg_number: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db.sequelize,
    tableName: 'bikes',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Bike;
