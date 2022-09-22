import request from '@/service/axios'

// 获取歌曲详情
export const getSongDetail = (ids: number) => {
  return request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}