import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Spacer = ({
    width,
    height
}) => {
    return <View style={{ width, height }}></View>
}

Spacer.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

Spacer.defaultProps = {
    width: 1,
    height: 1
};

export default Spacer;