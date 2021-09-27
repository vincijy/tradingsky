import { SubMenuItem, MenuItem } from '@/indices/def';
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

export interface IPayloadToggleMenuVisible {
    menuVisible:boolean;
}

export interface IPayloadToggleChartRecreated {
    chartRecreated:boolean;
}


export interface IPayloadsetChangeAuthingPanel {
    authingPanel:{
        visible:boolean;
        view:GuardScenes;
    };
}

export interface IPayloadUpdateLayout {
    layout:{
        chartBoxWidth:number;
    };
}

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
    menuVisible:boolean;
    chartRecreated:boolean;
    layout:{
        chartBoxWidth:number;
    };
}

export interface IPayloadMap {
    [A.CHANGE_MENU]:IPayloadChangeMenu;
    [A.TOGGLE_LOGIN_PANEL_VISIBLE]:IPayloadsetLoginPanelVisible;
    [A.CHANGE_AUTHING_PANEL]:IPayloadsetChangeAuthingPanel;
    [A.TOGGLE_MENU_VISIBLE]:IPayloadToggleMenuVisible;
    [A.TOGGLE_CHART_RECREATED]:IPayloadToggleChartRecreated;
    [A.UPDATE_LAYOUT]:IPayloadUpdateLayout;

}


export type TypePaylodMapKey = keyof IPayloadMap;

export type IAction<T extends TypePaylodMapKey> = Action<IPayloadMap[T]>;
