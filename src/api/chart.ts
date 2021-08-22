// 二次封装的axios
import { AxiosPromise } from 'axios';
import request from '../utils/request';

// TODO: fix type
export function getAddress(which:string):AxiosPromise<any> {
  return request({
    url: `/cross/addresses/${which}`, // 传入which变换指标类型
    params: {
      a: 'BTC',
      i: '24h',
      c: 'USD',
      api_key: '6c0ea60d-6495-4efd-b8b5-5b8d8f55447c',
      // timestamp_format: 'humanized',
    },
  });
}

export function getPrice():AxiosPromise<any> {
  return request({
    url: '/cross/market/price_usd_close', // 传入which变换指标类型
    params: {
      a: 'BTC',
      i: '24h',
      c: 'USD',
      api_key: '6c0ea60d-6495-4efd-b8b5-5b8d8f55447c',
      // timestamp_format: 'humanized',
    },
  });
}

/**
 * 获取后端接口数据
 * @returns
 */
export function getChartData(index:string, asset:string):AxiosPromise<any> {
  return request({
    url: `api/v1/${asset}/${index}/`,
    params: {},
  });
};
