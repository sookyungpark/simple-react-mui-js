import {initialState} from "./reducer";
import {createSelector} from 'reselect';
import {SUPPORTED_LANGUAGES} from "../constants";

const selectGlobal = state => state.global || initialState;

const createSidebarOpenedSelector = () =>
  createSelector(selectGlobal, mainState => mainState.sidebarOpened);

const createLanguageSelector = () =>
  createSelector(selectGlobal, mainState => mainState.language);

export {
  selectGlobal,
  createSidebarOpenedSelector,
  createLanguageSelector
};
