import { getAppInitState } from '@/config/init_state';
import { getUrlParams } from '@/utils/url';
import * as A from './action_type';
import { IChartState, IAction, TypePaylodMapKey } from './def';
const initState:IChartState = {
  priceData: {
    btc: [],
    eth: [],
  },
  options: getAppInitState().chartOptions,
  annotationVisible: false,
  dataAsset: getAppInitState().dataAsset,
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
      // eslint-disable-next-line no-case-declarations
      const dataAsset = (action as IAction<'CHANGE_ASSET'>).payload.dataAsset;
      // eslint-disable-next-line no-case-declarations
      const { index } = getUrlParams();
      window.history.pushState('', '', `/chart?index=${index}&asset=${dataAsset}`);
      return {
        ...state,
        dataAsset: (action as IAction<'CHANGE_ASSET'>).payload.dataAsset,
      };
    default:
      return state;
  }
};
