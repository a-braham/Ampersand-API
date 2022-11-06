import 'dotenv/config';
import { Sequelize } from 'sequelize';

const DBConfig = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const config = DBConfig[env];

interface Database {
  sequelize: Sequelize;
}

const db: Database = {
  sequelize: new Sequelize(
    process.env[config.use_env_variable] as string,

    config,
  ),
};

export default db;
