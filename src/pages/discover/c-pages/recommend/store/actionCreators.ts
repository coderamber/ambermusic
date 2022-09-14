import * as ActionTypes from './constants';
import { getTopBanners } from '@/pages/discover/c-pages/recommend/api/recommend'
import { RootThunkAction } from '@/store';

export const changeTopBannerAction = (res: any) => {
  return {
    type: ActionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
  }
}

export const getTopBannerAction = (): RootThunkAction => {
  return async (dispatch: any) => {
    const res = await getTopBanners()
    dispatch(changeTopBannerAction(res))
  }
}