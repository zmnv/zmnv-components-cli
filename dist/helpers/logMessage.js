"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logMessage = exports.appLogPattern = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appLogPattern = _chalk["default"].magentaBright('[zmnv-components-cli]');

exports.appLogPattern = appLogPattern;

var logMessage = function logMessage(message1, message2) {
  return console.log(appLogPattern, message1, message2);
};

exports.logMessage = logMessage;