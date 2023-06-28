import { editElement } from '../api/API'

const mutateElement = (newItem, oldItem) => editElement(newItem).then(() => newItem).catch(() => oldItem)

export default mutateElement
