import { getAppInitState } from '@config/init_state';
import * as A from './action_type';

import { IUserInfoState, IAction, TypePaylodKey } from './def';


// 默认状态
const defaultState:IUserInfoState = {
  userInfo: getAppInitState().userInfo,
  isLogin: getAppInitState().isLogin,
};

// 根据action更新state
export function reducer(
    state:IUserInfoState = defaultState,
    action:IAction<TypePaylodKey>,
):IUserInfoState {
  switch (action.type) {
    case A.TOGGLE_LOGIN:
      return {
        ...state,
        isLogin: (action as IAction<'TOGGLE_LOGIN'>).payload.isLogin,
      };
    case A.UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: (action as IAction<'UPDATE_USER_INFO'>).payload.userInfo,
      };
    case A.UPDATE_USER_COLLECTION:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          collection: (action as IAction<'UPDATE_USER_COLLECTION'>).payload.collection,
        },
      };
    default:
      return state;
  }
}

