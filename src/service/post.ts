
// 二次封装的axios
import { AxiosPromise } from 'axios';
import { IRole } from '@store/user/def';
import request from '../utils/request';
import { ICoin } from './def';

export function getPost(id:string):AxiosPromise<ICoin> {
  return request({
    url: `/bpi/v0/post/${id}`,
  });
};

export function getPostList(params:any):AxiosPromise<ICoin> {
  return request({
    url: '/bpi/v0/post',
    params: params,
  });
};


export function getTagList(params:any):AxiosPromise<ICoin> {
  return request({
    url: '/bpi/v0/tag',
    params: params,
  });
};

export function getPostListByTag(id:string, params:any):AxiosPromise<ICoin> {
  return request({
    url: `/bpi/v0/tag_post/${id}`,
    params: params,
  });
};
