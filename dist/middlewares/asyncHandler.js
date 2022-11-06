"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _statusCodes = require("../constants/statusCodes");
var _jsonResponse = _interopRequireDefault(require("../helpers/jsonResponse"));
var _logger = _interopRequireDefault(require("../helpers/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const isProduction = process.env.NODE_ENV === 'production';
const asyncHandler = cb => async (req, res, next) => {
  try {
    await cb(req, res, next);
  } catch (err) {
    console.log(err);
    if (isProduction) {
      _logger.default.error(err.message);
    }
    const status = err.status || _statusCodes.SERVER_ERROR;
    return (0, _jsonResponse.default)({
      res,
      status,
      message: err !== null && err !== void 0 && err.errors && err !== null && err !== void 0 && err.errors[0] ? err === null || err === void 0 ? void 0 : err.errors[0].message : err.message || err.data.errorMessage,
      error: !isProduction ? err : undefined
    });
  }
};
var _default = asyncHandler;
exports.default = _default;