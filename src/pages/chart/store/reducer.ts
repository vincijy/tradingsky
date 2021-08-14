// reducer用于修改state

// 性能优化
import { Map, fromJS } from 'immutable';
// 导入所有常量
import * as actionTypes from './constant';

// 默认状态
const defaultState = Map({
  glassAddressDate: [],
  glassPriceData: [],
});

// 根据action更新state
// TODO: fix type
function reducer(state = defaultState, action:any) {
  switch (action.type) {
    case actionTypes.CHANGEW_GLASS_ADDRESS:
      return state.set('glassAddressDate', action.glassAddressDate);
    case actionTypes.CHANGEW_GLASS_PRICE:
      return state.set('glassPriceData', action.glassPriceData);
    default:
      return state;
  }
}

export default reducer;
