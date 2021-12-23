import '@authing/react-ui-components/lib/index.min.css';

import smallLogo from '@/assets/img/logo.png';
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
  appId: '61160ec791133eecb2c0978b',
  appHost: 'https://lianshucha.authing.cn',
};

export const authingComponentConfig = {
  mode: 'modal',
  title: '欢迎来到LianShuCha',
  defaultScenes: 'login',
  // escCloseable: 'true',
  logo: `${smallLogo}`,
  contentCss: 'true',
};

// 文件图片图片路径前缀, 和图片文件名拼接使用
export const IMG_PREFIX = 'http://img.lianshucha.com/static/img_lsc/';
