/**
 * 数据类型定义，用于类型检查
 * 
 */

import { compose } from '@reduxjs/toolkit'

declare global {
  // 开发者工具配置
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}