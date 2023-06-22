const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload
    default:
      return []
  }
}

export default reducer
