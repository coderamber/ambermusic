/**
 * 配置信息
 * 
 */

// 开发环境服务器地址
const DEV_BASE_URL = 'http://123.207.32.32:9001';
// 生产环境服务器地址
const PROD_BASE_URL = 'xxxxxx';
// 判断当前环境自动获取服务器地址
export const BASE_URL = process.env.NODE_ENV === "development" ? DEV_BASE_URL : PROD_BASE_URL;