import { Action } from 'redux-actions';
import { TypeDataRow } from '@/components/chart/def';
import * as A from './action_type';

export interface IPayloadSetBtcPriceData {
    btcPriceData:TypeDataRow;
};

export interface IPayloadUpdateChartOption {
    options:any;
};

export interface IChartState {
    btcPriceData:TypeDataRow;
    // TODO: fix types
    options:any;
}

export interface IPayloadMap {
    [A.SET_BTC_PRICE_DATA]:IPayloadSetBtcPriceData;
    [A.UPDATE_CHART_OPTION]:IPayloadUpdateChartOption;
}

export type TypePaylodMapKey = keyof IPayloadMap;

export type IAction<T extends TypePaylodMapKey> = Action<IPayloadMap[T]>;
