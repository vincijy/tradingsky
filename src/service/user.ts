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
    url: '/api/v0/qkl_auth',
    data: {
      action: 'GET_ROLE',
    },
    method: 'POST',
  });
};

export function makeUserRole():AxiosPromise<IRole> {
  return request({
    url: '/api/v0/qkl_auth',
    data: {
      action: 'SET_ROLE',
    },
    method: 'POST',
  });
};

export function getUserColletion():AxiosPromise<IAuthingWord[]> {
  return request({
    url: '/api/v0/qkl_auth',
    data: {
      action: 'GET_FAVORS',
    },
    method: 'POST',
  });
};

interface ISetUserCollectParmas {
  collection:string;
}

export function setUserCollection(collection:ISetUserCollectParmas):AxiosPromise<ICollection> {
  return request({
    url: '/api/v0/qkl_auth',
    data: {
      action: 'SET_FAVORS',
      favors: collection.collection,
    },
    method: 'POST',
  });
};

export function getUserVipdate():AxiosPromise<IVipDate> {
  return request({
    url: '/api/v0/qkl_auth',
    data: {
      action: 'GET_VIP_DATE',
    },
    method: 'POST',
  });
};