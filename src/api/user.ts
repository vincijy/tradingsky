// 二次封装的axios
import { AxiosPromise } from 'axios';
import { IRole } from '@/store/user/def';
import request from '../utils/request';
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
