import React from 'react';
import { Appbar } from 'react-native-paper';

const NavigationBar = ({ options, navigation, previous }) => {
    return (
        <Appbar.Header>
            {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={options.tabBarLabel} />
        </Appbar.Header>
    );
}

export default NavigationBar;