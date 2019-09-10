export const currentUserReducer = (state = {firstName: "",lastName: "", email: "", photoURL: "", token: "", isNew: false}, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return action.user
    default:
      return state;
  }
}