import * as Actions from "./constant";
import produce from "immer"

const initState = {
    user: null,
    pendingLogin: false,
    loginErrorMsg: ""
}

const authReducer =  produce((draft, action) => {
  const {type, payload} = action;

  switch (type) {
      case Actions.DO_LOGOUT:
        draft.user = null;
        break;
      case Actions.LOGIN:
        draft.pendingLogin = true;
        draft.loginErrorMsg = "";
        break;
      case Actions.LOGIN_SUCCESS:
        draft.pendingLogin = false;
        draft.user = payload;
        draft.loginErrorMsg = "";
        break;
      case Actions.LOGIN_ERROR:
        draft.pendingLogin = false;
        draft.user = null;
        draft.loginErrorMsg = payload;
  }
}, initState);

export default authReducer;
