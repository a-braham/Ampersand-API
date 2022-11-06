"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * @param  {Object} data
 * @param  {ServerResponse} res
 * @return {ServerResponse} Response
 */
const jsonResponse = ({
  status,
  res,
  ...data
}) => {
  return res.status(status).json({
    status,
    ...data
  });
};
var _default = jsonResponse;
exports.default = _default;