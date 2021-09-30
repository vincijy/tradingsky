import { Action } from 'redux-actions';
import { User } from '@authing/react-ui-components/components/AuthingGuard/types/GuardConfig';
import { SubMenuItem } from '@/indices/def';
import * as A from './action_type';
export interface IUserInfoState {
    isLogin:boolean;
    userInfo:IUserInfo;
}

export interface IPayloadToggleLogin {
    isLogin:boolean;
}

export interface IPayloadUpdateUserInfo {
    userInfo:IUserInfo;
}

export interface IPayloadUpdateUserCollection {
    collection:ICollection;
}

export interface IPayloadMap {
    [A.TOGGLE_LOGIN]:IPayloadToggleLogin;
    [A.UPDATE_USER_INFO]:IPayloadUpdateUserInfo;
    [A.UPDATE_USER_COLLECTION]:IPayloadUpdateUserCollection;

}

export type TypePaylodKey = keyof IPayloadMap;

export type TypePaylodMapKey = keyof IPayloadMap;

export type IAction<T extends TypePaylodMapKey> = Action<IPayloadMap[T]>;


export interface IRole {
    code:'level1' | 'level2';
    description:string;
}

export interface ICollection {
    keyPaths:{
        menuKey:string;
        subMenuKey:string;
    }[];
}

export interface IVipDate {
    vipDate:string;
}

export interface IUserInfo extends User {
    role?:IRole;
    collection?:ICollection;
    vipDate?:IVipDate;
}
