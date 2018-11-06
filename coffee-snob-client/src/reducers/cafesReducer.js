const initialState = {
  cafes: [],
  cafe: {}
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'NEW_CAFE':
      return {
        ...state,
        cafe: action.payload
      }
    case 'FETCH_CAFES':
      return {
        ...state,
        cafes: action.payload
      }
    case 'FETCH_CAFE':
      return {
        ...state,
        cafe: action.payload
      }
    default:
    return state;
  }
}
