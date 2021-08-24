import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStack from './navigations/MainStack';

const AppRouter = ({
    theme
}) => {
    return <NavigationContainer theme={theme}>
        <MainStack />
    </NavigationContainer>
}

export default AppRouter;