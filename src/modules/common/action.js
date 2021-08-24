import { CHANGE_THEME } from "./constant"

/**
 * Change theme mode
 * @param {*} theme // dark or light
 * @returns 
 */
export const changeThemeAction = theme => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}