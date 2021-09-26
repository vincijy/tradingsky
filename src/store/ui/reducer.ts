import { menus } from '@/indices';
import { GuardScenes } from '@authing/react-ui-components'; // 登录框
import { isMobile } from '@/utils/is';
import * as A from './action_type';
import { IUiState, IAction, TypePaylodMapKey } from './def';
const initState:IUiState = {
  currentMenu: {
    menu: menus[0],
    subMenu: menus[0].subMenus[0],
  },
  menuVisible: !isMobile(),
  loginPanelVisible: false,
  authingPanel: {
    visible: false,
    view: GuardScenes.Login,
  },
  chartRecreated: false,
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
    case A.TOGGLE_MENU_VISIBLE:
      return {
        ...state,
        menuVisible: (action as IAction<'TOGGLE_MENU_VISIBLE'>).payload.menuVisible,
      };
    case A.TOGGLE_CHART_RECREATED:
      return {
        ...state,
        chartRecreated: (action as IAction<'TOGGLE_CHART_RECREATED'>).payload.chartRecreated,
      };
    default:
      return state;
  }
};
