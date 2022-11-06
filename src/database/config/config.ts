const pool = {
  max: 10,
  min: 0,
  acquire: 60000,
  idle: 10000,
}

const config = {
  development: {
    use_env_variable: 'DATABASE_URL_DEV',
    dialect: 'postgres',
    logging: false,
    pool,
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    dialect: 'postgres',
    logging: false,
    pool,
  },
  production: {
    logging: false,
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    pool,
  }
}

module.exports = config;
