import { deleteElement } from '../api/API'

const deleteElementFromDB = async selectedElements => {
  const arr = [...selectedElements]
  arr.forEach(element => deleteElement(element))
}

export default deleteElementFromDB
