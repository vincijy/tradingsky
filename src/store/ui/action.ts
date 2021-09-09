import { createAction } from 'redux-actions';
import * as A from './action_type';
import * as D from './def';

export const changeMenu = createAction<D.IPayloadChangeMenu>(A.CHANGE_MENU);

export const setLoginPanelVisible = createAction<D.IPayloadsetLoginPanelVisible>(A.TOGGLE_LOGIN_PANEL_VISIBLE);