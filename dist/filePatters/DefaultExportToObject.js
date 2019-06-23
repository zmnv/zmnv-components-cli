"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultExportToObject = void 0;

var DefaultExportToObject = function DefaultExportToObject(componentName) {
  return "export { default as ".concat(componentName, " } from './").concat(componentName, "';\n\n");
};

exports.DefaultExportToObject = DefaultExportToObject;