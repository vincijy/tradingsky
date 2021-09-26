import { createAction } from 'redux-actions';
import * as A from './action_type';
import * as D from './def';

export const changeMenu = createAction<D.IPayloadChangeMenu>(A.CHANGE_MENU);

export const setLoginPanelVisible = createAction<D.IPayloadsetLoginPanelVisible>(A.TOGGLE_LOGIN_PANEL_VISIBLE);

export const changeAuthingPanel = createAction<D.IPayloadsetChangeAuthingPanel>(A.CHANGE_AUTHING_PANEL);


export const toggleMenuVisible = createAction<D.IPayloadToggleMenuVisible>(A.TOGGLE_MENU_VISIBLE);

export const toggleChartRecreated = createAction<D.IPayloadToggleChartRecreated>(A.TOGGLE_CHART_RECREATED);
