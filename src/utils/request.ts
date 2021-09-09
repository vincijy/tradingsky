import axios from 'axios';
import { BASE_URL, TIMEOUT } from '@/config';
import store from '@/store';
import { message } from 'antd';

// 基本配置
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userInfo = (store.getState().headerLogin.userInfo);
    if (!userInfo) {
      return config;
    }
    const { token, id } = userInfo;
    if (!token || !id) {
      return config;
    }
    config.headers['Authorization'] = token;
    config.headers['userID'] = id;
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
        message.error('请求错误');
        break;
      case 401:
        message.error('未授权访问');
        break;
      case 500:
        message.error('服务端错误');
        break;
      default:
        message.error('其他错误信息');
    }
  }
  return err;
});

export default instance;
