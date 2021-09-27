import { appInitState } from '@/config';
import * as A from './action_type';
import { IChartState, IAction, TypePaylodMapKey } from './def';

const initState:IChartState = {
  priceData: {
    btc: [],
    eth: [],
  },
  options: appInitState.chartOptions,
  annotationVisible: false,
  dataAsset: 'btc',
};

export function reducer(state:IChartState = initState, action:IAction<TypePaylodMapKey>):IChartState {
  switch (action.type) {
    case A.SET_PRICE_DATA:
      return {
        ...state,
        priceData: (action as IAction<'SET_PRICE_DATA'>).payload.priceData,
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
