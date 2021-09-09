import * as A from './action_type';
import { IChartState, IAction, TypePaylodMapKey } from './def';

const initState:IChartState = {
  btcPriceData: [],
};

export function reducer(state:IChartState = initState, action:IAction<TypePaylodMapKey>):IChartState {
  switch (action.type) {
    case A.SET_BTC_PRICE_DATA:
      return {
        ...state,
        btcPriceData: (action as IAction<'SET_BTC_PRICE_DATA'>).payload.btcPriceData,
      };
    default:
      return state;
  }
};
