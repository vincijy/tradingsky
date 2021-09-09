import { createAction } from 'redux-actions';
import * as A from './action_type';
import * as D from './def';

export const changeMenu = createAction<D.PayloadChangeMenu>(A.CHANGE_MENU);

export const setLoginPanelVisible = createAction<D.PayloadsetLoginPanelVisible>(A.TOGGLE_LOGIN_PANEL_VISIBLE);