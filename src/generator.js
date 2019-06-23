import readline from 'readline';

import { createFolder, getNames, saveFile, appLogPattern } from './helpers';
import { PureComponent, ComponentStyles, DefaultExportToObject } from './filePatters';
import { version } from '../package.json';

function generateComponent(componentName = '') {
    const componentFolder = createFolder(componentName);

    const filenames = getNames(componentName);

    const componentBody = PureComponent(componentName, filenames.style);
    saveFile(`${componentFolder}/${filenames.component}`, componentBody);

    const styleBody = ComponentStyles(filenames.style.slice(0, -3));
    saveFile(`${componentFolder}/${filenames.style}`, styleBody);

    const indexBody = DefaultExportToObject(componentName);
    saveFile(`${componentFolder}/${filenames.index}`, indexBody);
}

function Generator() {
    console.log(appLogPattern, version);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    rl.question('Введите название компонента: ', (componentName) => {
        generateComponent(componentName);
        rl.close();
    });
}

module.exports = Generator;
