"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = exports.default = void 0;
require("dotenv/config");
var _sequelize = require("sequelize");
const DBConfig = require("../config/config");
const env = process.env.NODE_ENV || 'development';
const config = DBConfig[env];
const sequelize = new _sequelize.Sequelize(process.env[config.use_env_variable], config);
exports.sequelize = sequelize;
const db = {
  sequelize
};
var _default = db;
exports.default = _default;