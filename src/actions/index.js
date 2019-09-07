export const toggleFilterModal = boolean => ({
  type: 'TOGGLE_FILTER_MODAL',
  boolean
});

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

export const setUserLoggedIn = boolean => ({
  type: 'SET_USER_LOGGED_IN',
  boolean
});

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  user
});