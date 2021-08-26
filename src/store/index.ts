// 基本工具
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// 导入所有的reducer模块
import { rootReducer } from './reducer';

// devtool插件
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // 有插件就使用插件的compose、否则使用默认的compose

// 第一个参数reducer、第二参数添加中间件
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
