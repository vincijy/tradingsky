import { combineReducers } from 'redux';
import { reducer as userReducer } from './user';
import { reducer as uiReducer } from './ui';
import { reducer as chartReducer } from './chart';

export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  chart: chartReducer,
});
