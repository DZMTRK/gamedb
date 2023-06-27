import { getData } from '../actions'
import { deleteElement, getGameData } from '../api/API'

const deleteElementFromTable = async (rowSelectionModel, dispatch) => {
  const arr = [...rowSelectionModel]
  arr.forEach(element => deleteElement(element))
  await getGameData.then(data => dispatch(getData(data)))
}

export default deleteElementFromTable
