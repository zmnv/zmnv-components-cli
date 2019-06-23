"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFolder = createFolder;

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _logMessage = require("./logMessage");

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var savedComponentPath = _config["default"].savedComponentPath;

function createFolder(componentName) {
  var componentPathName = "".concat(savedComponentPath, "/").concat(componentName);

  if (!_fs["default"].existsSync(componentPathName)) {
    _fs["default"].mkdirSync(componentPathName);

    (0, _logMessage.logMessage)(_chalk["default"].greenBright('Создана папка:'), componentPathName); // console.log('Создана папка:', componentPathName);
  } else {
    (0, _logMessage.logMessage)(_chalk["default"].yellowBright('Папка уже существует:'), componentPathName);
  }

  return componentPathName;
}