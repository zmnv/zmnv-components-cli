export const PureComponent = (name, styleName) => `\
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { } from '~/theme/components';

${styleName && `import { ${styleName.slice(0, -3)} as styles } from './${styleName.slice(0, -3)}';`}

class ${name} extends PureComponent {
    render() {
        return (
            <View />
        );
    }
}

${name}.propTypes = {
};

${name}.defaultProps = {
};

export default ${name};

`;