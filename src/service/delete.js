import { getData } from '../actions'
import { deleteElement, getGameData } from '../api/API'

const deleteElementFromTable = (rowSelectionModel, dispatch) => {
  const arr = [...rowSelectionModel]
  async function deleteFromDB() { arr.forEach(element => deleteElement(element)) }
  deleteFromDB().then(getGameData).then(data => dispatch(getData(data)))
}

export default deleteElementFromTable
