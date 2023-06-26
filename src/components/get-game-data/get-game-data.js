import { useNavigate } from 'react-router-dom'

const getGameData = navigate => fetch('http://localhost:3002/game/')
  .catch(response => {
    if (!response.ok) {
      useNavigate('/404')
    }
  })
  .then(response => response.json())

export { getGameData }
