export const toggleFilterModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER_MODAL':
      return action.boolean;
    default:
      return state;
  }
};
