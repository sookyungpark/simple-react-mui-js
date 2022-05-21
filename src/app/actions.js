import {CLOSE_SIDEBAR, OPEN_SIDEBAR,
        CHANGE_LANGUAGE} from "./constants";

export function openSidebar() {
  return { type: OPEN_SIDEBAR }
}

export function closeSidebar() {
  return { type: CLOSE_SIDEBAR }
}

export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    language
  };
}