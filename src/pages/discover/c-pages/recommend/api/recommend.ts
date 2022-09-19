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

// 获取热门推荐数据
export function getHotRecommend(limit: number) {
  return request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 新碟上架数据
export function getNewAlbum(limit: number) {
  return request.get({
    url: '/top/album',
    params: {
      limit
    }
  })
}

// 获取所有榜单
// 榜单数据
export function getTopList(id: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}