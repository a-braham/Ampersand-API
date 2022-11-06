"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRules = exports.loginRules = void 0;
var _celebrate = require("celebrate");
const loginRules = (0, _celebrate.celebrate)({
  body: _celebrate.Joi.object().keys({})
});
exports.loginRules = loginRules;
const registerRules = (0, _celebrate.celebrate)({
  body: _celebrate.Joi.object().keys({})
});
exports.registerRules = registerRules;