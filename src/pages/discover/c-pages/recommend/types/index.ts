// store state type
export interface IStoreState {
  topBanners: never[]
  hotRecommends: never[]
  newAlbums: never[]
  upRanking: object
  newRanking: object
  originRanking: object
}

// store action type
export interface IActionType extends IStoreState {
  type: string
}

// swiper obj type
export interface IBanners {
  imageUrl: string
  typeTitle: string
}

// swiper background type
export interface IBgImage {
  bgImage: string
}