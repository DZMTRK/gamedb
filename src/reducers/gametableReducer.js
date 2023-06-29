import { handleAction } from 'redux-actions'

import { sendDataToState } from '../actions'

const initState = {
  gametable: [],
}

const gametableReducer = handleAction(
  sendDataToState,
  (state, action) => ({
    ...state,
    gametable: action.payload,
  }),
  initState,
)

export default gametableReducer
