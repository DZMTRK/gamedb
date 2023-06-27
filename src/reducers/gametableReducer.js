const initState = {
  gametable: [],
}

// eslint-disable-next-line default-param-last
const gametableReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        gametable: action.payload,
      }
    case 'ADD_DATA':
      return {
        gametable: [...state],
      }
    default:
      return state
  }
}

export default gametableReducer
