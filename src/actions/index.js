export const toggleFilterModal = boolean => ({
  type: 'TOGGLE_FILTER_MODAL',
  boolean
});

// export const setFilterCriteria = criteria => ({
//   type: 'SET_FILTER_CRITERIA',
//   criteria
// });

export const setDistanceValue = distance => ({
  type: 'SET_DISTANCE_VALUE',
  distance
});

export const setActivityLevel = activeLevel => ({
  type: 'SET_ACTIVE_LEVEL',
  activeLevel
});

export const setDogSize = size => ({
  type: 'SET_DOG_SIZE',
  size
});