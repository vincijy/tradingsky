import { Action } from 'redux-actions';
import * as A from './action_type';

export interface IUserInfoState {
    isLogin:boolean;
    userInfo:any;
}

export interface IPayloadToggleLogin {
    isLogin:boolean;
}

export interface IPayloadUpdateUserInfo {
    userInfo:any;
}

export interface IPayloadMap {
    [A.TOGGLE_LOGIN]:IPayloadToggleLogin;
    [A.UPDATE_USER_INFO]:IPayloadUpdateUserInfo;
}

export type TypePaylodKey = keyof IPayloadMap;

export type TypePaylodMapKey = keyof IPayloadMap;

export type IAction<T extends TypePaylodMapKey> = Action<IPayloadMap[T]>;

