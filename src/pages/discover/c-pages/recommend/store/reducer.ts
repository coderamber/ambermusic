import * as ActionTypes from './constants'

const defaultState = {
  topBanners: []
}

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case ActionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    default:
      return state;
  }
}

export default reducer