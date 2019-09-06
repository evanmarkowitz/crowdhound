import { combineReducers } from 'redux';
import {toggleFilterModalReducer} from './toggleFilterModalReducer';
import { filterCriteriaReducer } from './filterCriteriaReducer';

export const rootReducer = combineReducers({
  toggleFilterValue: toggleFilterModalReducer,
  filterCriteria: filterCriteriaReducer
})