import { combineReducers } from 'redux';
import {toggleFilterModalReducer} from './toggleFilterModalReducer';
import { distanceValueReducer } from './distanceValueReducer';
import { activityLevelReducer } from './activityLevelReducer';
import { dogSizeReducer } from './dogSizeReducer';

export const rootReducer = combineReducers({
  toggleFilterValue: toggleFilterModalReducer,
  distance: distanceValueReducer,
  activityLevel: activityLevelReducer,
  dogSize: dogSizeReducer,
})