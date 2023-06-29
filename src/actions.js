import { createAction } from 'redux-actions'

export const sendDataToState = createAction('SEND_DATA_TO_STATE', payload => payload)
