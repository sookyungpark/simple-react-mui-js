import produce from 'immer'
import {
  CHANGE_LANGUAGE,
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR
} from "./constants";

export const initialState = {
  sidebarOpened: false,
  language: "en",
  error: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return produce(state, (draft) => {
        draft.sidebarOpened = true;
      })
    case CLOSE_SIDEBAR:
      return produce(state, (draft) => {
        draft.sidebarOpened = false;
      })
    case CHANGE_LANGUAGE:
      return produce(state, (draft) => {
        draft.language = action.language;
      })
    default:
      return state;
  }
}

export default appReducer
