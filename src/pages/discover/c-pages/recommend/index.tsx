import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators';
const Recommend = () => {

  const { topBanners } = useSelector((state: any) => ({
    topBanners: state.recommendReducer.topBanners
  }), shallowEqual)

  const dispatch = useDispatch();
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  },[dispatch])

  return (
    <div>Recommend: {topBanners.length}</div>
  )

}
export default memo(Recommend)