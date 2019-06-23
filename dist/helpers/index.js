"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createFolder = require("./createFolder");

Object.keys(_createFolder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createFolder[key];
    }
  });
});

var _getNames = require("./getNames");

Object.keys(_getNames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getNames[key];
    }
  });
});

var _saveFile = require("./saveFile");

Object.keys(_saveFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _saveFile[key];
    }
  });
});

var _logMessage = require("./logMessage");

Object.keys(_logMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _logMessage[key];
    }
  });
});