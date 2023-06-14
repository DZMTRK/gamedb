const getGameData = () => {
    const urlToFetch = 'http://localhost:3002/game'
    return fetch(urlToFetch).then((response)=>{
        if (response.ok) {
            let jsonResponse = response.json()
            return jsonResponse
        }
    }).catch((error)=>{
        console.log(error)
    })
}

export { getGameData }