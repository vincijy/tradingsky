import { handleActions } from 'redux-actions';
import { menus } from '@/config/menu';
import * as A from './action_type';
import { Iui } from './def';

const initState:Iui = {
  currentMenu: {
    menu: menus[0],
    subMenu: menus[0].subMenus[0],
  },
  loginPanelVisible: false,
};

// https://redux.js.org/usage/usage-with-typescript
function setUi(state = initState, action:any) {
  switch (action.type) {
    case A.CHANGE_MENU:
      return {
        ...state,
        currentMenu: action.payload.currentMenu,
      };
    case A.TOGGLE_LOGIN_PANEL_VISIBLE:
      return {
        ...state,
        loginPanelVisible: action.payload.loginPanelVisible,
      };
    default:
      return state;
  }
}

export const reducer = handleActions<Iui, any>(
  {
    [A.CHANGE_MENU]: setUi,
    [A.TOGGLE_LOGIN_PANEL_VISIBLE]: setUi,
  },
  initState,
);
