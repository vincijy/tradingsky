import { commonOptions } from '@/indices/chart_common';
import { chart as initialPrivateOption } from '@/indices/0_address/active/chart';
import { mergeOption } from '@/utils/merge_option';
import * as A from './action_type';
import { IChartState, IAction, TypePaylodMapKey } from './def';

// 初始化配置
const mergeOptions = mergeOption(commonOptions, initialPrivateOption);

const initState:IChartState = {
  btcPriceData: [],
  options: mergeOptions,
  annotationVisible: false,
  dataAsset: 'btc',
};

export function reducer(state:IChartState = initState, action:IAction<TypePaylodMapKey>):IChartState {
  switch (action.type) {
    case A.SET_BTC_PRICE_DATA:
      return {
        ...state,
        btcPriceData: (action as IAction<'SET_BTC_PRICE_DATA'>).payload.btcPriceData,
      };
    case A.UPDATE_CHART_OPTION:
      return {
        ...state,
        options: (action as IAction<'UPDATE_CHART_OPTION'>).payload.options,
      };
    case A.TOGGLE_ANNOTATION:
      return {
        ...state,
        annotationVisible: (action as IAction<'TOGGLE_ANNOTATION'>).payload.annotationVisible,
      };
    case A.CHANGE_ASSET:
      return {
        ...state,
        dataAsset: (action as IAction<'CHANGE_ASSET'>).payload.dataAsset,
      };
    default:
      return state;
  }
};
