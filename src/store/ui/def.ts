import { SubMenuItem, MenuItem } from '@/config/def';
import { Action } from 'redux-actions';
import { GuardScenes } from '@authing/react-ui-components'; // 登录框
import * as A from './action_type';

export interface IPayloadChangeMenu {
    currentMenu:{
        menu:Omit<MenuItem, 'subMenus'>;
        subMenu:SubMenuItem;
    };
};

export interface IPayloadsetLoginPanelVisible {
    loginPanelVisible:boolean;
}

export interface IPayloadsetChangeAuthingPanel {
    authingPanel:{
        visible:boolean;
        view:GuardScenes;
    };}

export interface IUiState {
    currentMenu:{
      menu:Omit<MenuItem, 'subMenus'>;
      subMenu:SubMenuItem;
    };
    loginPanelVisible:boolean;
    authingPanel:{
      visible:boolean;
      view:GuardScenes;
    };
}

export interface IPayloadMap {
    [A.CHANGE_MENU]:IPayloadChangeMenu;
    [A.TOGGLE_LOGIN_PANEL_VISIBLE]:IPayloadsetLoginPanelVisible;
    [A.CHANGE_AUTHING_PANEL]:IPayloadsetChangeAuthingPanel;
}


export type TypePaylodMapKey = keyof IPayloadMap;

export type IAction<T extends TypePaylodMapKey> = Action<IPayloadMap[T]>;
