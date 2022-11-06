"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _celebrate = require("celebrate");
var _statusCodes = require("../constants/statusCodes");
var _jsonResponse = _interopRequireDefault(require("../helpers/jsonResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const joiErrors = () => (err, req, res, next) => {
  if (!(0, _celebrate.isCelebrate)(err)) return next(err);
  const joiError = err.joi.details[0];
  return (0, _jsonResponse.default)({
    res,
    status: _statusCodes.BAD_REQUEST,
    message: joiError.message,
    errors: err.joi.details
  });
};
var _default = joiErrors;
exports.default = _default;