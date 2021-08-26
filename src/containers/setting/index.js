import React from 'react';
import { View } from 'react-native';
import { Divider, List, Switch, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { changeThemeAction } from '../../modules/common/action';
import { THEME } from '../../modules/common/constant';
import { themeSelector } from '../../modules/common/selector';
import Language from './Language';

const Setting = ({
    theme,
    changeTheme
}) => {
    return <View>
        <List.Section>
            <List.Subheader>App Settings</List.Subheader>
            <List.Item 
                title="Dark Mode" 
                left={() => <List.Icon icon="theme-light-dark" />} 
                right={() => {
                    return <View style={{justifyContent: 'center'}}>
                            <Switch value={theme === THEME.dark} onValueChange={val => {
                            changeTheme(val ? THEME.dark : THEME.light)
                        }} />
                    </View>
                }}
            />
            <Divider />
            <Language />
        </List.Section>
    </View>
}

const mapStateToProps = state => ({
    theme: themeSelector(state)
})

const mapDispatchToProps = {
    changeTheme: changeThemeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);