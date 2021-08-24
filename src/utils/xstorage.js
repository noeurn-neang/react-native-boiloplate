import AsyncStorage from '@react-native-async-storage/async-storage';
import { THEME } from '../modules/common/constant';

const storeData = async (key, value) => {
    await AsyncStorage.setItem(key, value);
}

const getData = async (key) => {
    return await AsyncStorage.getItem(key)
}

const setTheme = async (theme) => {
    await storeData("theme", theme)
}

const getTheme = async () => {
    const theme = await getData("theme");
    return theme;
}

export default {
    setTheme,
    getTheme
}

