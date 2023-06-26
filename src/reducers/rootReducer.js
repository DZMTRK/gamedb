import { combineReducers } from 'redux'

import gametableReducer from './gametableReducer'

const rootReducer = combineReducers({
  gametable: gametableReducer,
})

export default rootReducer
