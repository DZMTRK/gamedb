import { createSelector } from 'reselect'

const tableData = createSelector(state => state.gametable.gametable, data => data)

export { tableData }
