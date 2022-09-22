import { RECOMMEND_ACTION_TYPE } from './constants';
import { getHotRecommend, getNewAlbum, getTopBanners, getTopList } from '@/pages/discover/c-pages/recommend/api/recommend'
import { RootThunkAction } from '@/store';
import { RANKING_TYPE } from '@/common/constance';

// 轮播图 action
export const changeTopBannerAction = (res: any) => {
  return {
    type: RECOMMEND_ACTION_TYPE.CHANGE_TOP_BANNERS,
    topBanners: res.banners
  }
}
// 轮播图数据请求
export const getTopBannerAction = (): RootThunkAction => {
  return async (dispatch: any) => {
    const res = await getTopBanners()
    dispatch(changeTopBannerAction(res))
  }
}

// 热门推荐 action
export const changeHotRecommendAction = (res: any) => {
  return {
    type: RECOMMEND_ACTION_TYPE.CHANGE_HOT_RECOMMED,
    hotRecommends: res.result
  }
}
// 热门推荐请求
export const getHotRecommendAction = (limit: number) => {
  return async (dispatch: any) => {
    const res = await getHotRecommend(limit);
    dispatch(changeHotRecommendAction(res))
  }
}

// 新碟上架 action
export const changeNewAlbumAction = (res: any) => {
  return {
    type: RECOMMEND_ACTION_TYPE.CHANGE_NEW_ALBUM,
    newAlbums: res.monthData.slice(0, 9)
  }
}
// 新碟上架请求
export const getNewAlbumAction = (limit: number) => {
  return async (dispatch: any) => {
    const res = await getNewAlbum(limit)
    dispatch(changeNewAlbumAction(res))
  }
}

// 榜单飙升榜 action
export const changeUpRankingAction = (res: any) => {
  return {
    type: RECOMMEND_ACTION_TYPE.CHANGE_UP_RANKING,
    upRanking: res.playlist
  }
}
export const changeNewRankingAction = (res: any) => {
  return {
    type: RECOMMEND_ACTION_TYPE.CHANGE_NEW_RANKING,
    newRanking: res.playlist
  }
}
export const changeOriginRankingAction = (res: any) => {
  return {
    type: RECOMMEND_ACTION_TYPE.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
  }
}
// 榜单请求
export const getTopListAction = (id: number) => {
  return async (dispatch: any) => {
    const res = await getTopList(id)
    switch (id) {
      case RANKING_TYPE.UP_RANKING:
        dispatch(changeUpRankingAction(res))
        break
      case RANKING_TYPE.NEW_RANKING:
        dispatch(changeNewRankingAction(res))
        break
      case RANKING_TYPE.ORIGIN_RANKING:
        dispatch(changeOriginRankingAction(res))
        break
      default:
    }
  }
}