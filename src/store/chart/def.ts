import { Action } from 'redux-actions';
import { TypeDataRow } from '@components/chart/def';
import * as A from './action_type';

interface IAssetPriceData {
    btc:TypeDataRow;
    eth:TypeDataRow;
    [key:string]:TypeDataRow;
}

export interface IPayloadSetPriceData {
    priceData:IAssetPriceData;
};

export interface IPayloadUpdateChartOption {
    options:any;
};

export interface IPayloadToggleAnnotation {
    annotationVisible:boolean;
};

export interface IPayloadChangeAsset {
    dataAsset:'btc' | 'eth' | string;
}


export interface IChartState {
    priceData:IAssetPriceData;
    // TODO: fix types
    options:any;
    annotationVisible:boolean;
    dataAsset:'btc' | 'eth' |string;
}

export interface IPayloadMap {
    [A.SET_PRICE_DATA]:IPayloadSetPriceData;
    [A.UPDATE_CHART_OPTION]:IPayloadUpdateChartOption;
    [A.TOGGLE_ANNOTATION]:IPayloadToggleAnnotation;
    [A.CHANGE_ASSET]:IPayloadChangeAsset;
}

export type TypePaylodMapKey = keyof IPayloadMap;

export type IAction<T extends TypePaylodMapKey> = Action<IPayloadMap[T]>;
