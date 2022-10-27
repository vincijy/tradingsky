import '@authing/react-ui-components/lib/index.min.css';

import { ossImgs } from '@oss';
// 开发环境
const DEV_BASE_URL = 'http://localhost:3000';

// 生产环境
const PROD_BASE_URL = '';

// 根据环境选择服务器
export const BASE_URL = process.env.NODE_ENV === 'development' ? DEV_BASE_URL : PROD_BASE_URL;
// 配置超时的常量
export const TIMEOUT = 500000;

export const OSS_HOST = 'https://servlinkcdn.vincijy.com';


export const authingConfig = {
  appId: '62f9228baa8046761d0f9967',
  appHost: 'https://tokenaly.authing.cn',
};

export const authingComponentConfig = {
  mode: 'modal',
  title: 'Tokenaly',
  defaultScenes: 'login',
  // escCloseable: 'true',
  // contentCss: 'authing-guard-header { display: none; }',
  lang: 'en-US',
};

// 文件图片图片路径前缀, 和图片文件名拼接使用
// export const IMG_PREFIX = 'http://img.lianshucha.com/static/img_lsc/';
