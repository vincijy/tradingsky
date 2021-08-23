// reducer用于修改state

// 性能优化
import { Map } from 'immutable';
// 导入所有常量
import { Action, handleActions } from 'redux-actions';
import { menus } from '@/config/menu';
import * as D from './def';
import * as A from './action_type';

const initState = Map({
  selectedSubMenu: menus[0].subMenus[0],
  loginPanelVisible: false,
});

// TODO: 类型管理
function setUi(state = initState, action:any) {
  switch (action.type) {
    case A.changeMenu:
      return state.set('selectedSubMenu', action.payload.selectedSubMenu);
    case A.setLoginPanelVisible:
      return state.set('loginPanelVisible', action.payload.loginPanelVisible);
    default:
      return state;
  }
}

// TODO: fix type
export const setUiReducer = handleActions<any, any>(
  {
    [A.changeMenu]: setUi,
    [A.setLoginPanelVisible]: setUi,
  },

  initState,
);
