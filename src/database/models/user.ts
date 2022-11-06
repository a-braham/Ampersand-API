import { Model, DataTypes } from 'sequelize';
import db from './index';

/**
 * User Class Model
 */
class User extends Model {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone_number!: string;
  public id_number!: string;
  public status!: string;
  public password!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {};
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    id_number: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'inactive',
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db.sequelize,
    tableName: 'users',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default User;
