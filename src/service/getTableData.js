import { sendDataToState } from '../actions'
import { getGameData } from '../api/API'


const getTableData = () => dispatch => getGameData()
  .then(data => {
    dispatch(sendDataToState(data))
    return data
  })

export default getTableData
