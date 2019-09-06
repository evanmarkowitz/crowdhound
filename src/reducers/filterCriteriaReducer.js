export const filterCriteriaReducer = (state = {
  distanceValue: 10,
  activityLevel: 0,
  size: 'small'}, action) => {
  switch(action.type) {
    case 'SET_FILTER_CRITERIA':
      return action.criteria
    default:
      return state;
  }
}