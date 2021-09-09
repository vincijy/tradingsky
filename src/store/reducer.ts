// 合并每个模块的reducer
// import { combineReducers } from 'redux-immutable';
// 导入每个模块的reducer
import { reducer as headerLoginReducer } from '@/components/app-header/store';
import { setUiReducer } from '@/pages/studio/store/reducer';

import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
  headerLogin: headerLoginReducer, // 头部组件login的redux
  uiData: setUiReducer,
});
