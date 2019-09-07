export const distanceValueReducer = (state = 10, action) => {
  switch(action.type) {
    case 'SET_DISTANCE_VALUE':
      return action.distance
    default:
      return state;
  }
}