export const activityLevelReducer = (state = 0, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_LEVEL':
      return action.activeLevel
    default:
      return state;
  }
}