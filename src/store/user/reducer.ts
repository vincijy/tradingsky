// reducer用于修改state

// 导入所有常量
import * as A from './action_type';

import { IUserInfoState } from './def';

// 从缓存里面取出用户数据
const userInfoString = localStorage.getItem('userInfo');

let userInfo = [];
if (userInfoString) {
  userInfo = JSON.parse(userInfoString);
}

// 默认状态
const defaultState:IUserInfoState = {
  isLogin: userInfo.token !== undefined,
  userInfo: userInfo,
};

// 根据action更新state
export function reducer(state:IUserInfoState = defaultState, action:any):IUserInfoState {
  switch (action.type) {
    case A.CHANGE_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case A.CHANGE_LOGOUT:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case A.CHANGE_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
}

