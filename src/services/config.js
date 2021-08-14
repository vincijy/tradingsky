// 开发环境
const devBaseURL = "http://localhost:3000"
// 生产环境
const proBaseURL = ""

// 根据环境选择服务器
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL
// 配置超时的常量
export const TIMEOUT = 500000


