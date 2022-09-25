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

// 获取歌词
export const getLyric = (id: number) => {
  return request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}