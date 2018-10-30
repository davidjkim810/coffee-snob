

export default (state = [], action) => {
  switch(action.type){
    case 'NEW_USER':
      return {
        ...state,
        cafe: action.payload.cafe
      }
    default:
    return state;
  }
}
