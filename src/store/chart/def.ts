import { SubMenuItem, MenuItem } from '@/config/def';
import { Action } from 'redux-actions';
import * as A from './action_type';

export interface IPayloadSetBtcPriceData {
    btcPriceData:any;
};

export interface IChartState {
    btcPriceData:any;
}

export interface IPayloadMap {
    [A.SET_BTC_PRICE_DATA]:IPayloadSetBtcPriceData;
}

export type TypePaylodMapKey = keyof IPayloadMap;

export type IAction<T extends TypePaylodMapKey> = Action<IPayloadMap[T]>;
