import { combineReducers } from 'redux';
import { reducer as headerLoginReducer } from './user_info';
import { setUiReducer } from './ui_data/reducer';

export const rootReducer = combineReducers({
  headerLogin: headerLoginReducer, // 头部组件login的redux
  uiData: setUiReducer,
});
