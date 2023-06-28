import { useNavigate } from 'react-router-dom'

const url = 'http://localhost:3002/game/'

const getGameData = () => (fetch(url)
  .catch(response => {
    if (!response.ok) {
      useNavigate('/404')
    }
  })
  .then(response => response.json()))


const addElement = item => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  }
  return fetch(url, requestOptions)
}


const deleteElement = item => {
  const requestOptions = {
    method: 'DELETE',
  }
  return fetch(url + item, requestOptions)
}


const editElement = item => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(item),
  }
  return fetch(url + item.id, requestOptions)
}

export { getGameData, addElement, deleteElement, editElement }
