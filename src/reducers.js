import { combineReducers } from "redux";

import commonReducer from "./modules/common/reducer";
import authReducer from "./modules/auth/reducer";

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
    common: commonReducer,
    auth: authReducer
  });
  
export default rootReducers;
