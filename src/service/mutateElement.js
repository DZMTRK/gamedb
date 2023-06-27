import { editElement } from '../api/API'

const mutateElement = item => {
  editElement(item)
  return item
}

export default mutateElement
