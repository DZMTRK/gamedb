const initState = {
  gametable: [],
}

// eslint-disable-next-line default-param-last
const gametableReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SEND_DATA_TO_STATE':
      return {
        gametable: action.payload,
      }
    default:
      return state
  }
}

export default gametableReducer
