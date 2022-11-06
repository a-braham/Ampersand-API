"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _winston = _interopRequireWildcard(require("winston"));
require("dotenv/config");
var _appRootPath = _interopRequireDefault(require("app-root-path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const options = {
  file: {
    level: 'info',
    filename: `${_appRootPath.default}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};
const logger = _winston.default.createLogger({
  format: _winston.format.combine(_winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }), _winston.format.printf(info => JSON.stringify({
    timestamp: info === null || info === void 0 ? void 0 : info.timestamp,
    level: info === null || info === void 0 ? void 0 : info.level,
    message: info === null || info === void 0 ? void 0 : info.message,
    splat: (info === null || info === void 0 ? void 0 : info.splat) || ''
  }))),
  transports: [new _winston.default.transports.File(options.file), new _winston.default.transports.Console(options.console)],
  exitOnError: false // do not exit on handled exceptions
});
var _default = logger;
exports.default = _default;