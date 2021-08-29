// 开发环境
const DEV_BASE_URL = 'http://localhost:3000';
// 生产环境
const PROD_BASE_URL = '';

// 根据环境选择服务器
export const BASE_URL = process.env.NODE_ENV === 'development' ? DEV_BASE_URL : PROD_BASE_URL;
// 配置超时的常量
export const TIMEOUT = 500000;

export const OSS_HOST = 'https://servlinkcdn.vincijy.com';
