import {takeLatest} from 'redux-saga/effects'

import i18n from './../i18n'
import {CHANGE_LANGUAGE} from "./constants"

export function* changeLanguage(object) {
  const language = object.language;
  i18n.changeLanguage(language);
}

export default function* localize() {
  yield takeLatest(CHANGE_LANGUAGE, changeLanguage)
}
