import { deleteElement } from '../api/API'

const deleteElementFromDB = selectedElements => {
  const arr = [...selectedElements]
  const arrayOfPromises = arr.map(element => deleteElement(element))
  return Promise.all(arrayOfPromises)
}

export default deleteElementFromDB
