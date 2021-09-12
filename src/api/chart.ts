// 二次封装的axios
import { AxiosPromise } from 'axios';
import request from '../utils/request';
import { IResponseChartData } from './def';
/**
 * 获取后端接口数据
 * @returns
 */
export function getChartData(index:string, asset:string):AxiosPromise<IResponseChartData> {
  return request({
    url: `/api/v1/charts/${asset}/${index}`,
    params: {},
  });
};

/**
 * BTC 价格线, 图表中公用的一条线
 * @returns
 */
export function getBtcPrice():AxiosPromise<IResponseChartData> {
  const asset = 'btc';
  const index = 'market/price_close';
  return request({
    url: `/api/v1/charts/${asset}/${index}`,
    params: {},
  });
};
