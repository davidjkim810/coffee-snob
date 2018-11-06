export default (state = [], action) => {
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
    default:
    return state;
  }
}
