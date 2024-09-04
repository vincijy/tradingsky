// 二次封装的axios
import { AxiosPromise, CancelTokenSource } from 'axios';
import request from '../utils/request';
import { IResponseChartData } from './def';

const host = 'https://qkldata.com'
/**
 * 获取后端接口数据
 * @returns
 */
export function getChartData(index:string, asset:string, source?:CancelTokenSource, menu?:string, subMenu?:string):AxiosPromise<IResponseChartData> {
  const config = {
    url: `${host}/api/v1/charts/${asset}/${index}`,
    params: {menu, subMenu},
  };
  if (source) {
    (config as any).cancelToken = source.token;
  }
  return request(config);
};

/**
 * BTC 价格线, 图表中公用的一条线
 * @returns
 */
export function getAssetPrice(asset:string):AxiosPromise<IResponseChartData> {
  // const asset = 'btc';
  const index = 'market/price_close';
  return request({
    url: `${host}/api/v1/charts/${asset}/${index}`,
    params: {},
  });
};
