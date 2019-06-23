"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNames = void 0;

var getNames = function getNames(componentName) {
  return {
    component: "".concat(componentName, ".jsx"),
    style: "".concat(componentName[0].toLowerCase()).concat(componentName.slice(1), "Styles.js"),
    index: 'index.js'
  };
};

exports.getNames = getNames;