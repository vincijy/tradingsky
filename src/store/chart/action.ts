import { createAction } from 'redux-actions';
import * as A from './action_type';
import * as D from './def';

export const setPriceData = createAction<D.IPayloadSetPriceData>(A.SET_PRICE_DATA);

export const updateChartOption = createAction<D.IPayloadUpdateChartOption>(A.UPDATE_CHART_OPTION);

export const toggleAnnotation = createAction<D.IPayloadToggleAnnotation>(A.TOGGLE_ANNOTATION);

export const changeAsset = createAction<D.IPayloadChangeAsset>(A.CHANGE_ASSET);