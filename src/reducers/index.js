import { combineReducers } from 'redux'
import {toggleFilterModalReducer} from './toggleFilterModalReducer'

export const rootReducer = combineReducers({
  toggleFilterValue: toggleFilterModalReducer
})