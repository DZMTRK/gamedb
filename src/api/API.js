import { useNavigate } from 'react-router-dom'

const url = 'http://localhost:3002/game/'

const fetchMethods = {
  post: 'POST',
  delete: 'DELETE',
  put: 'PUT',
}

const requestHeader = { 'Content-type': 'application/json' }

const getGameData = () => (fetch(url)
  .catch(response => {
    if (!response.ok) {
      useNavigate('/404')
    }
  })
  .then(response => response.json()))


const addElement = item => {
  const requestOptions = {
    method: fetchMethods.post,
    headers: requestHeader,
    body: JSON.stringify(item),
  }
  return fetch(url, requestOptions)
}


const deleteElement = item => {
  const requestOptions = {
    method: fetchMethods.delete,
  }
  return fetch(url + item, requestOptions)
}


const editElement = item => {
  const requestOptions = {
    method: fetchMethods.put,
    headers: requestHeader,
    body: JSON.stringify(item),
  }
  return fetch(url + item.id, requestOptions)
}

export { getGameData, addElement, deleteElement, editElement }
