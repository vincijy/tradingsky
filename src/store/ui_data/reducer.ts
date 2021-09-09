// 导入所有常量
import { handleActions } from 'redux-actions';
import { menus } from '@/config/menu';
import { SubMenuItem, MenuItem } from '@/config/def';

import * as A from './action_type';

interface IUIState {
  currentMenu:{
    menu:Omit<MenuItem, 'subMenus'>;
    subMenu:SubMenuItem;
  };
  loginPanelVisible:boolean;
}


const initState:IUIState = {
  currentMenu: {
    menu: menus[0],
    subMenu: menus[0].subMenus[0],
  },
  loginPanelVisible: false,
};


// https://redux.js.org/usage/usage-with-typescript
// TODO: 类型管理
function setUi(state = initState, action:any) {
  switch (action.type) {
    case A.changeMenu:
      return {
        ...state,
        currentMenu: action.payload.currentMenu,
      };
    case A.setLoginPanelVisible:
      return {
        ...state,
        loginPanelVisible: action.payload.loginPanelVisible,
      };
    default:
      return state;
  }
}

// TODO: fix type
export const setUiReducer = handleActions<IUIState, any>(
  {
    [A.changeMenu]: setUi,
    [A.setLoginPanelVisible]: setUi,
  },

  initState,
);
