import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navs from './navs';
import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screen/home';
import SettingScreen from '../screen/setting';
import NavigationBar from '../containers/NavigationBar';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      header: (props) =>  <NavigationBar {...props} />
    }}>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color, size}) => {
            return <Icon color={color} size={size} name="home" />
          }
        }}
        name={navs.home} 
        component={HomeScreen} />
      <Tab.Screen 
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({color, size}) => {
            return <Icon color={color} size={size} name="settings" />
          }
        }}
        name={navs.setting} 
        component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab;