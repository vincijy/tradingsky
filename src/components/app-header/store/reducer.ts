// reducer用于修改state

// 性能优化
import { Map, fromJS } from 'immutable';
// 导入所有常量
import * as actionTypes from './constant';

// 默认状态
const defaultState = Map({
  isLogin: false,
  userInfo: [],
});

// 根据action更新state
function reducer(state = defaultState, action:any) {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('isLogin', action.isLogin);
    case actionTypes.CHANGE_LOGOUT:
      return state.set('isLogin', action.isLogin);
    case actionTypes.CHANGE_USERINFO:
      return state.set('userInfo', action.userInfo);
    default:
      return state;
  }
}

export default reducer;

