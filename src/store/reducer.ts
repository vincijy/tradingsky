// 合并每个模块的reducer
import { combineReducers } from 'redux-immutable';

// 导入每个模块的reducer
import { reducer as chartPageReducer } from '@/pages/chart/store';

const cReducer = combineReducers({
  chartPage: chartPageReducer,
});

export default cReducer;
