"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFile = saveFile;

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _logMessage = require("./logMessage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function saveFile(pathName, body) {
  _fs["default"].writeFile(pathName, body, function (err) {
    if (err) {
      (0, _logMessage.logMessage)(err);
      return false;
    }

    (0, _logMessage.logMessage)(_chalk["default"].greenBright('Создан файл:'), pathName);
    return true;
  });
}