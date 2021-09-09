import { combineReducers } from 'redux';
import { reducer as userReducer } from './user';
import { reducer as uiReducer } from './ui';

export const rootReducer = combineReducers({
  user: userReducer, // 头部组件login的redux
  ui: uiReducer,
});
