import { useNavigate } from 'react-router-dom'

const url = 'http://localhost:3002/game/'

const getGameData = () => fetch(url)
  .catch(response => {
    if (!response.ok) {
      useNavigate('/404')
    }
  })
  .then(response => response.json())

export { getGameData }


const addElement = item => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  }
  return fetch(url, requestOptions)
}

export { addElement }

const deleteElement = item => {
  const requestOptions = {
    method: 'DELETE',
  }
  return fetch(url + item, requestOptions)
}

export { deleteElement }
