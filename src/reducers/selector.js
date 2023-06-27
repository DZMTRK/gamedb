import { createSelector } from 'reselect'

const getTableData = createSelector(
  state => state.gametable.gametable,
  (data) => {
    return data
  })

export { getTableData }
