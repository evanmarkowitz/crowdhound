export const currentUserReducer = (state = {firstName: "",lastName: "", email: "", photoURL: "", }, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return action.user
    default:
      return state;
  }
}