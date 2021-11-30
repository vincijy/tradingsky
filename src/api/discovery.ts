// 二次封装的axios
import { AxiosPromise } from 'axios';
import { IRole } from '@/store/user/def';
import request from '../utils/request';
import { ICoin } from './def';

/**
 * 获取后端接口数据
 * @returns
 */
export function getWhaleAddress(asset:string):AxiosPromise<any> {
  return request({
    url: `/api/v1/explore/whale/${asset}`,
    params: {},
  });
};

export function getWhaleTop(asset:string):AxiosPromise<any> {
  return request({
    url: `/api/v1/explore/top/${asset}`,
    params: {},
  });
};

export function getAllPrice(asset:string):AxiosPromise<any> {
  return request({
    url: `/api/v1/explore/historical/${asset}`,
    params: {},
  });
};

export function getDynamicCoin(asset:string):AxiosPromise<any> {
  return request({
    url: `/api/v1/explore/${asset}`,
    params: {},
  });
};

export function getExtremum(asset:string):AxiosPromise<any> {
  return request({
    url: `/api/v1/explore/extremum/${asset}`,
    params: {},
  });
};

/**
 * 第二台服务器的接口
 * @param params
 * @returns
 */
export function getCoinList(params:{pageId:number, pageSize:number}):AxiosPromise<{
  list:ICoin[];
  total:number;
}> {
  return request({
    url: '/bpi/v0/coin',
    params: params,
  });
};

export function getCoin(id:string):AxiosPromise<ICoin> {
  return request({
    url: `/bpi/v0/coin/${id}`,
  });
};

