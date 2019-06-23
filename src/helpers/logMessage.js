import chalk from 'chalk';

export const appLogPattern = chalk.magentaBright('[zmnv-components-cli]');

export const logMessage = (message1, message2) => console.log(appLogPattern, message1, message2);
