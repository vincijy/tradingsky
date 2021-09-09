import { menus } from '@/config/menu';
import { GuardScenes } from '@authing/react-ui-components'; // 登录框
import * as A from './action_type';
import { IUiState, IAction, TypePaylodMapKey } from './def';

const initState:IUiState = {
  currentMenu: {
    menu: menus[0],
    subMenu: menus[0].subMenus[0],
  },
  loginPanelVisible: false,
  authingPanel: {
    visible: false,
    view: GuardScenes.Login,
  },
};

export function reducer(state:IUiState = initState, action:IAction<TypePaylodMapKey>):IUiState {
  switch (action.type) {
    case A.CHANGE_MENU:
      return {
        ...state,
        currentMenu: (action as IAction<'CHANGE_MENU'>).payload.currentMenu,
      };
    case A.TOGGLE_LOGIN_PANEL_VISIBLE:
      return {
        ...state,
        loginPanelVisible: (action as IAction<'TOGGLE_LOGIN_PANEL_VISIBLE'>).payload.loginPanelVisible,
      };
    case A.CHANGE_AUTHING_PANEL:
      return {
        ...state,
        authingPanel: (action as IAction<'CHANGE_AUTHING_PANEL'>).payload.authingPanel,
      };
    default:
      return state;
  }
};
