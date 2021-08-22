// 合并每个模块的reducer
import { combineReducers } from 'redux-immutable';

// 导入每个模块的reducer
import { reducer as chartPageReducer } from '@/pages/chart/store';
import { reducer as headerLoginReducer } from '@/components/app-header/store';

const cReducer = combineReducers({
  chartPage: chartPageReducer, // 图表页面redux
  headerLogin: headerLoginReducer, // 头部组件login的redux
});

export default cReducer;
