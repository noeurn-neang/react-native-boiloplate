import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navs from './navs';
import BottomTab from './BottomTab';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName={navs.bottomTab}>
            <Stack.Screen options={{headerShown: false}} name={navs.bottomTab} component={BottomTab} />
            <Stack.Screen name={navs.authStack} component={AuthStack} />
        </Stack.Navigator>
    )
}

export default MainStack;