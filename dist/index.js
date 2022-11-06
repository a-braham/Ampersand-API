"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  PORT = 3000
} = process.env;

// Start server
const server = _app.default.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}/api/v1/ ...`));
var _default = _app.default;
exports.default = _default;