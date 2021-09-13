import { commonOptions } from '@/components/chart/option_common';
import { options } from '@/components/chart/line/option';
import * as A from './action_type';
import { IChartState, IAction, TypePaylodMapKey } from './def';

const mergeOptions = Object.assign(commonOptions, options);
const initState:IChartState = {
  btcPriceData: [],
  options: mergeOptions,
  annotationVisible: false,
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
    default:
      return state;
  }
};
