
import request from '../utils/request';

export function alipayOrder(data:any) {
  return request({
    url: '/bpi/v0/pay/alipay/web_url',
    method: 'post',
    data,
  });
}
