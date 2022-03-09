import { AxiosPromise } from 'axios';
import request from '../utils/request';

interface IOrder {
  orderId:string;
  finalPrice:string;
  orderStatusTypeCode:string;
  userId:string;
}

/**
 * 第二台服务器的接口
 * @param params
 * @returns
 */
export function getMyOrders(params:{pageId:number, pageSize:number, userId:string}):AxiosPromise<{
  list:IOrder[];
  total:number;
}> {
  return request({
    url: '/bpi/v0/orders',
    params: params,
  });
};

/**
 * 获取可以分成的订单ID
 * @param id
 * @returns
 */
export function getProfitOrders(params:{pageId:number, pageSize:number, introUserId:string}):AxiosPromise<{
list:IOrder[];
total:number;
}> {
  return request({
    url: '/bpi/v0/orders/share',
    params: params,
  });
};
