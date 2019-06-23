"use strict";

var _readline = _interopRequireDefault(require("readline"));

var _helpers = require("./helpers");

var _filePatters = require("./filePatters");

var _package = require("../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function generateComponent() {
  var componentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var componentFolder = (0, _helpers.createFolder)(componentName);
  var filenames = (0, _helpers.getNames)(componentName);
  var componentBody = (0, _filePatters.PureComponent)(componentName, filenames.style);
  (0, _helpers.saveFile)("".concat(componentFolder, "/").concat(filenames.component), componentBody);
  var styleBody = (0, _filePatters.ComponentStyles)(filenames.style.slice(0, -3));
  (0, _helpers.saveFile)("".concat(componentFolder, "/").concat(filenames.style), styleBody);
  var indexBody = (0, _filePatters.DefaultExportToObject)(componentName);
  (0, _helpers.saveFile)("".concat(componentFolder, "/").concat(filenames.index), indexBody);
}

function Generator() {
  console.log(_helpers.appLogPattern, _package.version);

  var rl = _readline["default"].createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Введите название компонента: ', function (componentName) {
    // eslint-disable-next-line no-console
    // console.log(`Введите название компонента: ${componentName}`);
    generateComponent(componentName);
    rl.close();
  });
}

module.exports = Generator;