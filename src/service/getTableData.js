import * as actions from '../actions'
import { getGameData } from '../api/API'

const getTableData = dispatch => getGameData().then(data => dispatch(actions.getData(data)))

export default getTableData
