/**
 * recommend 相关的网络请求
 * 
 */

import request from '@/service/axios'

// 获取顶部轮播图
export function getTopBanners() {
  return request.get({
    url: '/banner'
  })
}