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
});

function setMenu(state:any, action:Action<D.PayloadChangeMenu>) {
  const { payload } = action;
  if (!payload) {
    return state;
  }
  return { ...state, ...payload };
};

// TODO: fix type
export const setMenuReducer = handleActions<any, any>(
  { [A.changeMenu]: setMenu },
  initState,
);
