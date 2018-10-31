export default (state = [], action) => {
  switch(action.type){
    case 'NEW_CAFE':
    debugger
      return {
        ...state,
        cafe: action.payload
      }
    default:
    return state;
  }
}
