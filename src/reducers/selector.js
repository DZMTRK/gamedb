import { createSelector } from 'reselect'

const selectTableData = createSelector(state => state.gametable.gametable, data => data)

export { selectTableData }
