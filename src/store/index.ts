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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const isProductionBuild = process.env.NODE_ENV === 'production';

if (!isProductionBuild) {
  (window as any).store = store;
}