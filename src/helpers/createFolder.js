import fs from 'fs';
import chalk from 'chalk';

import { logMessage } from './logMessage';

import config from '../config';
const { savedComponentPath } = config;

export function createFolder(componentName) {
    const componentPathName = `${savedComponentPath}/${componentName}`;

    if (!fs.existsSync(componentPathName)){
        fs.mkdirSync(componentPathName);
        logMessage(chalk.greenBright('Создана папка:'), componentPathName)
        // console.log('Создана папка:', componentPathName);
    } else {
        logMessage(chalk.yellowBright('Папка уже существует:'), componentPathName);
    }

    return componentPathName;
}
