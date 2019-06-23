"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentStyles = void 0;

var ComponentStyles = function ComponentStyles(styleName) {
  return "import { StyleSheet } from 'react-native';\n\nimport { layout } from '~/theme';\n\nexport const ".concat(styleName, " = StyleSheet.create({\n    ...layout,\n});\n\n");
};

exports.ComponentStyles = ComponentStyles;