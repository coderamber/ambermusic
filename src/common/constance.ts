// recommend 中的常量
export enum RECOMMEND {
  // 热门推荐一次请求的数量
  HOT_RECOMMEND_LIMIT = 8,
  // 新碟上架一次请求的数量
  NEW_ALBUMS_LIMIT = 10,
  // 新碟上架的页数
  NEW_ALBUMS_PAGE_NUM = 2,
  // 新碟上架一页的数量
  NEW_ALBUMS_PER_PAGE = 5,
  // 新碟上架封面图片大小
  NEW_ALBUMS_SIZE = 100,
  // 新碟上架封面图片宽度
  NEW_ALBUMS_WIDTH = 118,
  // 新碟上架封面 bgp 位置
  NEW_ALBUMS_BGP = -570
}

// recommend-ranking type
export enum RANKING_TYPE {
  UP_RANKING = 19723756,
  NEW_RANKING = 3779629,
  ORIGIN_RANKING = 2884035
}