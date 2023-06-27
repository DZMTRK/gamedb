import { getData } from '../actions'
import { addElement, getGameData } from '../api/API'

const addElementToTable = (item, dispatch) => {
  addElement(item)
    .then(getGameData)
    .then(data => {
      dispatch(getData(data))
    })
}
// .catch(() => {
//   dispatch(addFail)
// })

export default addElementToTable
