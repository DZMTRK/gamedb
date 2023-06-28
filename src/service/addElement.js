import { sendDataToState } from '../actions'
import { addElement, getGameData } from '../api/API'

const addElementToTable = item => (dispatch, getState) => {
  addElement(item)
    .then(getGameData)
    .then(data => {
      dispatch(sendDataToState(data))
    })
}
// .catch(() => {
//   dispatch(addFail)
// })

export default addElementToTable
