import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Caption, Divider, List, Text, Title, useTheme } from 'react-native-paper';
import { Ionicons as Icon, MaterialIcons } from '@expo/vector-icons';
import BottomModal from '../modal/BottomModal';
import { Spacer } from '../../components';

const Language = () => {
    const [visible, setVisible] = useState(false);
    const { colors, dimens } = useTheme();
    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 450,
            }}
        >
            <Text>Swipe down to close</Text>
        </View>
    );

    const sheetRef = React.useRef(null);

    return (
        <>
            <List.Item
                title="Language"
                left={() => <List.Icon icon={props => <Icon {...props} name="language" />} />}
                right={props => {
                    return <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Caption>English</Caption>
                        <MaterialIcons size={dimens.icon} name="keyboard-arrow-right" color={colors.text} />
                    </View>
                }}
                onPress={() => { setVisible(true) }}
            />
            <BottomModal
                ratioHeight={0.4}
                backgroundColor={colors.surface}
                visible={visible}
                setModalVisible={(vis) =>
                    setVisible(vis)
                }
                topLeftElement={<View style={{ paddingHorizontal: dimens.paddingL }}>
                    <Title>Choose Language</Title>
                </View>}
            >
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <View>
                        <List.Item
                            title="English"
                            right={props => {
                                return <List.Icon icon={props => <Icon {...props} size={dimens.icon} name="md-checkmark" />} />
                            }}
                            onPress={() => { setVisible(true) }}
                        />
                        <Divider />
                        <List.Item
                            title="ភាសាខ្មែរ"
                            right={props => {
                                return <List.Icon icon={props => <Icon {...props} size={dimens.icon} name="md-checkmark" />} />
                            }}
                            onPress={() => { setVisible(true) }}
                        />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Button uppercase={false} mode="contained" style={{ margin: dimens.paddingL }}>Confirm</Button>
                    </View>
                </View>
            </BottomModal>
        </>
    )
}

export default Language;