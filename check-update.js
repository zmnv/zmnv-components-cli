const { get } = require('https');
const semver = require('semver');
const chalk = require('chalk').default;

const { version } = require('./package.json');

const updateMessage = (newVersion, currentVersion) => chalk.yellowBright(`

  Доступна новая версия ${currentVersion} -> ${newVersion}
  npm i -g zmnv-components-cli
`);

const CheckUpdates = function () {
    get('https://raw.githubusercontent.com/zmnv/zmnv-components-cli/master/package.json', response => {
        // const total = response.headers["content-length"];

        response.on('data', chunk => {
            const res = JSON.parse(chunk.toString());

            const isVersionOld = semver.lt(version, res.version);
            if(isVersionOld) console.log(updateMessage(res.version, version));
        });

        response.on('error', () => {});

    }).on('error', () => {});
};

module.exports = CheckUpdates;