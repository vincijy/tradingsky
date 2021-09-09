// reducer用于修改state

// 导入所有常量
import * as actionTypes from './action_type';

// 从缓存里面取出用户数据
const userInfoString = localStorage.getItem('userInfo');
let userInfo = [];
if (userInfoString) {
  userInfo = JSON.parse(userInfoString);
}

// 默认状态
const defaultState = {
  isLogin: userInfo.token !== undefined,
  userInfo: userInfo,
};

// 根据action更新state
function reducer(state = defaultState, action:any) {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case actionTypes.CHANGE_LOGOUT:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case actionTypes.CHANGE_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
}

export default reducer;

