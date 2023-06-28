const url = 'http://localhost:3002/game/'

const fetchMethods = {
  post: 'POST',
  delete: 'DELETE',
  put: 'PUT',
}
const requestHeader = { 'Content-type': 'application/json' }
const requestBody = item => JSON.stringify(item)

const getGameData = () => fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('can not get data')
    } else {
      return response
    }
  })
  .then(response => response.json())


const addElement = item => {
  const requestOptions = {
    method: fetchMethods.post,
    headers: requestHeader,
    body: requestBody(item),
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
    body: requestBody(item),
  }
  return fetch(url + item.id, requestOptions)
}

export { getGameData, addElement, deleteElement, editElement }
