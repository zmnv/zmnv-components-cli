import fs from 'fs';
import chalk from 'chalk';

import { logMessage } from './logMessage';

export function saveFile(pathName, body) {
    fs.writeFile(pathName, body, (err) => {
        if (err) {
            logMessage(err);
            return false;
        }

        logMessage(chalk.greenBright('Создан файл:'), pathName);
        return true;
    });
}