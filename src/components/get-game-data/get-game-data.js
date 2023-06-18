const getGameData = (urlToFetch, setData, navigate) => fetch(urlToFetch)
  .catch(response => {
    if (!response.ok) {
      navigate('/404')
    }
  })
  .then(response => response.json())
  .then(data => setData(data))

export { getGameData }
