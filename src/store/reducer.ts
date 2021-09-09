import { combineReducers } from 'redux';
import { reducer as userReducer } from './user';
import { reducer as uiReducer } from './ui';

export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
});
