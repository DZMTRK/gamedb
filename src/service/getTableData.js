import { getGameData } from '../api/API'
import { sendDataToState } from '../reducers/gametableReducer'


const getTableData = () => dispatch => getGameData()
  .then(data => {
    dispatch(sendDataToState(data))
    return data
  })

export default getTableData
