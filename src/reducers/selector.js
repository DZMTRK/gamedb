import { createSelector } from 'reselect'

const selectTableData = createSelector(state => state.gametable.gametable, data => data)

const selectGenre = createSelector(state => state.gametable.gametable, data => {
  let arr = []
  data.map(game => arr.push(game.genre))
  arr = arr.flat()
  const occurrences = { }
  for (let i = 0, j = arr.length; i < j; i++) {
    occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1
  }
  const genreArr = []
  Object.keys(occurrences).forEach(key => genreArr.push([key, occurrences[key]]))
  return genreArr
})

const xAxisCat = createSelector(selectGenre, selectGenre => {
  const arr = []
  selectGenre.map(item => arr.push(item[0]))
  return arr
})

export { selectTableData, selectGenre, xAxisCat }
