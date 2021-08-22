import axios from 'axios';
import { BASE_URL, TIMEOUT } from '@/config';
import store from '@/store';

// 基本配置
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log(config, 'config');
    const userInfo = (store.getState() as any).getIn(['headerLogin', 'userInfo']);
    if (!userInfo) {
      return config;
    }
    config.headers['Authorization'] = userInfo.token;
    config.headers['userID'] = userInfo.id;
    return config;
  },
  (err) => {
    console.error(err);
  },
);

// 响应拦截器
instance.interceptors.response.use((res) => res.data, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('请求错误');
        break;
      case 401:
        console.log('未授权访问');
        break;
      default:
        console.log('其他错误信息');
    }
  }
  return err;
});

export default instance;
