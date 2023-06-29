import { createAction, handleActions } from 'redux-actions'


const initState = {
  gametable: [],
}

const sendDataToState = createAction('SEND_DATA_TO_STATE', payload => payload)

const handleTableData = (state, action) => ({
  ...state,
  gametable: action.payload,
})


const reducers = handleActions({
  SEND_DATA_TO_STATE: handleTableData,
}, initState)

export {
  sendDataToState,
}

export default reducers
