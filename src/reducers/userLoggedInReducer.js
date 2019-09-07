export const userLoggedInReducer = (state = false, action) => {
  switch(action.type) {
    case 'SET_USER_LOGGED_IN':
      return action.boolean
    default:
      return state;
  }
}