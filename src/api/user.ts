// 二次封装的axios
import { AxiosPromise } from 'axios';
import { IRole, ICollection, IVipDate } from '@store/user/def';
import request from '../utils/request';
import { IAuthingWord } from './def';

/**
 * 获取后端接口数据
 * @returns
 */
export function getUserRole():AxiosPromise<IRole> {
  return request({
    url: '/api/v1/auth',
    params: {},
  });
};

export function makeUserRole():AxiosPromise<IRole> {
  return request({
    url: '/api/v1/auth/sign',
    params: {},
  });
};

export function getUserColletion():AxiosPromise<IAuthingWord[]> {
  return request({
    url: '/api/v1/auth/collect',
    params: {},
    method: 'GET',
  });
};

interface ISetUserCollectParmas {
  collection:string;
}

export function setUserCollection(params:ISetUserCollectParmas):AxiosPromise<ICollection> {
  return request({
    url: '/api/v1/auth/collect',
    data: params,
    method: 'POST',
  });
};

export function getUserVipdate():AxiosPromise<IVipDate> {
  return request({
    url: '/api/v1/auth/vipdate',
    params: {},
  });
};