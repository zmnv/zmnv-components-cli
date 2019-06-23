"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureComponent = void 0;

var PureComponent = function PureComponent(name, styleName) {
  return "import React, { PureComponent } from 'react';\nimport PropTypes from 'prop-types';\n\nimport { View } from 'react-native';\nimport { } from '~/theme/components';\n\n".concat(styleName && "import { ".concat(styleName.slice(0, -3), " as styles } from './").concat(styleName, "';"), "\n\nclass ").concat(name, " extends PureComponent {\n    render() {\n        return (\n            <View />\n        );\n    }\n}\n\n").concat(name, ".propTypes = {\n};\n\n").concat(name, ".defaultProps = {\n};\n\nexport default ").concat(name, ";\n\n");
};

exports.PureComponent = PureComponent;