import * as actionTypes from './action_type'; // 常量

const changeLogin = () => ({ // 传入true
  type: actionTypes.CHANGE_LOGIN,
  isLogin: true,
});

export const getLoginAction = () => // 登录状态
  (dispatch:any) => {
    dispatch(changeLogin());
  };

const changeLogout = () => ({ // 传入false
  type: actionTypes.CHANGE_LOGOUT,
  isLogin: false,
});

export const getLogoutAction = () => // 登出状态
  (dispatch:any) => {
    dispatch(changeLogout());
  };

const changeUserInfo = (res:any) => ({
  type: actionTypes.CHANGE_USERINFO,
  userInfo: res,
});

export const getUserInfoAction = (res:any) =>
  (dispatch:any) => {
    dispatch(changeUserInfo(res));
  };