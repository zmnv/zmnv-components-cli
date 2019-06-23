export const getNames = componentName => ({
    component: `${componentName}.jsx`,
    style: `${componentName[0].toLowerCase()}${componentName.slice(1)}Styles.js`,
    index: 'index.js',
});
