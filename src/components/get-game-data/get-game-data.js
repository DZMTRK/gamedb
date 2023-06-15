const getGameData = (urlToFetch, setData) => fetch(urlToFetch)
  .then(response => response.json())
  .then(data => { setData(data) })

export { getGameData }
