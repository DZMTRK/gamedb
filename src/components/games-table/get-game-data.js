const getGameData = async () => {
    const urlToFetch = 'http://localhost:3002/game';
    try {
      let response = await fetch(urlToFetch);
      if (response.ok) {
        let jsonResponse = await response.json();
      };
    } catch (error) {
      console.log(error);
    };
  };

  export { getGameData };