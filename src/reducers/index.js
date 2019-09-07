import { combineReducers } from 'redux';
import {toggleFilterModalReducer} from './toggleFilterModalReducer';
import { distanceValueReducer } from './distanceValueReducer';
import { activityLevelReducer } from './activityLevelReducer';
import { dogSizeReducer } from './dogSizeReducer';
import { userLoggedInReducer } from './userLoggedInReducer';
import { currentUserReducer } from './currentUserReducer';

export const rootReducer = combineReducers({
  toggleFilterValue: toggleFilterModalReducer,
  distance: distanceValueReducer,
  activityLevel: activityLevelReducer,
  dogSize: dogSizeReducer,
  userLoggedIn: userLoggedInReducer,
  currentUser: currentUserReducer
})