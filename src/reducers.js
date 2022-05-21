import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import appReducer from "./app/reducer"
import history from "./history"

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global: appReducer,
    router: connectRouter(history),
    ...injectedReducers,
  })
}