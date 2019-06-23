export const ComponentStyles = (styleName) => `\
import { StyleSheet } from 'react-native';

import { layout } from '~/theme';

export const ${styleName} = StyleSheet.create({
    ...layout,
});

`;
