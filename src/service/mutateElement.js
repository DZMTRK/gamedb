import { editElement } from '../api/API'

const mutateElement = (newItem, oldItem) => editElement(newItem)
  .then(response => {
    if (!response.ok) {
      throw new Error('Can not edit. No connection!')
    } else return response
  }).then(() => newItem)

export default mutateElement
