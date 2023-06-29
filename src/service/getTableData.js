import { sendDataToState } from '../actions'
import { getGameData } from '../api/API'
import * as pagelist from '../components/pages/pagelist'

const getTableData = () => (dispatch, navigate) => getGameData()
  .then(data => dispatch(sendDataToState(data)))
  .catch(() => navigate(pagelist.path404))

export default getTableData
