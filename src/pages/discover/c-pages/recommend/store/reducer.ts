import { Map } from "immutable";

import { IActionType, IStoreState } from "../types";
import { ACTION_TYPE } from './constants'

// recommend state
const stateObj: IStoreState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: {},
  newRanking: {},
  originRanking: {}
}

// use immutable to improve performance
const defaultState = Map(stateObj)

function reducer(state = defaultState, action: IActionType) {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    case ACTION_TYPE.CHANGE_HOT_RECOMMED:
      return state.set("hotRecommends", action.hotRecommends)
    case ACTION_TYPE.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums)
    case ACTION_TYPE.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case ACTION_TYPE.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
      case ACTION_TYPE.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    default:
      return state;
  }
}

export default reducer