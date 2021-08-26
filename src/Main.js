import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppRouter from './AppRouter';
import { Colors } from './theme';
import { THEME } from './modules/common/constant';
import { Appearance, View } from 'react-native';

import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import { connect } from 'react-redux';
import { themeSelector } from './modules/common/selector';
import storage from './utils/xstorage';
import { changeThemeAction } from './modules/common/action';

const DefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const DarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Main = ({
    themeMode,
    changeTheme
}) => {

    console.log(themeMode);

    useEffect(() => {
        const bootstrap = async () => {
            const savedTheme = await storage.getTheme();
            
            // set theme from local storage to state
            if(savedTheme != null) {
                changeTheme(changeTheme)
            }

            // get theme from system
            const colorScheme = Appearance.getColorScheme();
            if(colorScheme != null) {
                changeTheme(colorScheme)
            }
        }

        bootstrap();
    }, []);

    const isDark = themeMode == THEME.dark;
    const currentTheme = isDark ? DarkTheme : DefaultTheme;

    const theme = {
        ...currentTheme,
        dark: isDark,
        colors: {
            ...currentTheme.colors,
            ...Colors[themeMode]
        },
        dimens: {
            padding: 10,
            paddingL: 15,
            icon: 18
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style={isDark ? "light" : "dark"} />
            <PaperProvider theme={theme}>
                <AppRouter theme={theme}/>
            </PaperProvider>
        </View>
    )
}

const mapStateToProps = state => ({
    themeMode: themeSelector(state)
})

const mapDispatchToProps = {
    changeTheme: changeThemeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);