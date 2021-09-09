// 二次封装的axios
import { AxiosPromise, AxiosResponse } from 'axios';
import request from '../utils/request';
import { IChartDataResponse } from './def';
/**
 * 获取后端接口数据
 * @returns
 */
export function getChartData(index:string, asset:string):AxiosPromise<IChartDataResponse> {
  return request({
    url: `/api/v1/charts/${asset}/${index}`,
    params: {},
  });
};

/**
 * BTC 价格线, 图表中公用的一条线
 * @returns
 */
export function getBtcPrice():AxiosPromise<IChartDataResponse> {
  const asset = 'btc';
  const index = 'market_price';
  return request({
    url: `/api/v1/charts/${asset}/${index}`,
    params: {},
  });
};
