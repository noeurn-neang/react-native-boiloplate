import * as Actions from "./constant";
import produce from "immer";

const initState = {
  theme: Actions.DEFAULT_THEME
}

const commonReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case Actions.CHANGE_THEME:
        draft.theme = action.payload;
        break;
      default:
        break;
    }
  });

export default commonReducer;

