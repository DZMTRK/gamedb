import { createSelector } from 'reselect'

const tableDataSelector = state => state.gametable.gametable

const tableData = createSelector([tableDataSelector], data => data)

export { tableData }
