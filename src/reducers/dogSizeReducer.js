export const dogSizeReducer = (state = 'small', action) => {
  switch(action.type) {
    case 'SET_DOG_SIZE':
      return action.size
    default:
      return state;
  }
}