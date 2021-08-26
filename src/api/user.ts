// 二次封装的axios
import { AxiosPromise } from 'axios';
import request from '../utils/request';

/**
 * 获取后端接口数据
 * @returns
 */
export function getUserRole():AxiosPromise<any> {
  return request({
    url: '/api/v1/auth',
    params: {},
  });
};

(window as any).getUserRole = getUserRole;

export function makeUserRole():AxiosPromise<any> {
  return request({
    url: '/api/v1/auth/sign',
    params: {},
  });
};

(window as any).makeUserRole = makeUserRole;