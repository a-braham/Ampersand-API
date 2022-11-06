"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
require("./database/models/associations");
var _jsonResponse = _interopRequireDefault(require("./helpers/jsonResponse"));
var _joiErrors = _interopRequireDefault(require("./middlewares/joiErrors"));
var _statusCodes = require("./constants/statusCodes");
var _v = _interopRequireDefault(require("./resources/api/v1"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const {
  NODE_APP_INSTANCE
} = process.env;
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _morgan.default)('dev'));

// Routes
app.use('/api/v1', _v.default);

// Application routing
app.get('/', (req, res) => {
  return (0, _jsonResponse.default)({
    status: _statusCodes.OK,
    res,
    message: 'Rest API'
  });
});
app.use((0, _joiErrors.default)());

// Catch wrong routes
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = _statusCodes.NOT_FOUND;
  next(error);
});

// Catch all errors
app.use((error, req, res) => {
  const status = error.status || _statusCodes.SERVER_ERROR;
  const message = error.message || 'Something went wrong. Please try again';
  return (0, _jsonResponse.default)({
    res,
    status,
    message
  });
});
var _default = app;
exports.default = _default;