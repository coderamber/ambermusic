/**
 * 配置信息
 * 
 */

// 开发环境服务器地址
const DEV_BASE_URL = 'http://101.34.30.250:30503';
// 生产环境服务器地址
const PROD_BASE_URL = 'http://101.34.30.250:30503';
// 判断当前环境自动获取服务器地址
export const BASE_URL = process.env.NODE_ENV === "development" ? DEV_BASE_URL : PROD_BASE_URL;