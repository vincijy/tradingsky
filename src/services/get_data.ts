// 二次封装的axios
import request from './request';

// TODO: fix type
export function getAddressData(which:any, token:any, user:any) {
  return request({
    url: `cross/address/${which}`,
    headers: {
      Authorization: `${token}`,
      userID: `${user}`,
    },
  });
}