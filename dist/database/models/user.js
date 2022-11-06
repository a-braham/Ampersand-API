"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * User Class Model
 */
class User extends _sequelize.Model {}
User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.DataTypes.INTEGER
  },
  first_name: {
    type: _sequelize.DataTypes.STRING
  },
  last_name: {
    type: _sequelize.DataTypes.STRING
  },
  email: {
    type: _sequelize.DataTypes.STRING
  },
  phone_number: {
    type: _sequelize.DataTypes.STRING
  },
  id_number: {
    type: _sequelize.DataTypes.STRING
  },
  status: {
    type: _sequelize.DataTypes.STRING,
    defaultValue: 'inactive'
  },
  password: {
    type: _sequelize.DataTypes.STRING
  }
}, {
  sequelize: _index.default.sequelize,
  tableName: 'users',
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
var _default = User;
exports.default = _default;