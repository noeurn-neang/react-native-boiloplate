import { DO_LOGOUT, LOGIN, LOGIN_SUCCESS, REGISTER } from "./constants"

export const setLoggedInUserAction = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginAction = params => {
    return {
        type: LOGIN,
        payload: params
    }
}

export const doLogoutAction = () => {
    return {
        type: DO_LOGOUT
    }
}