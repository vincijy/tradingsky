// 二次封装的axios
import { AxiosPromise } from 'axios';
import { IRole, ICollection, IVipDate } from '@/store/user/def';
import request from '../utils/request';
import { IAuthingWord } from './def';

/**
 * 获取后端接口数据
 * @returns
 */
export function getWhaleAddress(asset:string):AxiosPromise<IRole> {
  return request({
    url: `/api/v1/explore/whale/${asset}`,
    params: {},
  });
};

export function getWhaleTop(asset:string):AxiosPromise<IRole> {
  return request({
    url: `/api/v1/explore/top/${asset}`,
    params: {},
  });
};

export function getRealTime(asset:string):AxiosPromise<IRole> {
  return request({
    url: `/api/v1/explore/${asset}`,
    params: {},
  });
};

export function getAllPrice(asset:string):AxiosPromise<IRole> {
  return request({
    url: `/api/v1/explore/historical/${asset}`,
    params: {},
  });
};