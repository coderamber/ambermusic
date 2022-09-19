import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import RecommendTitleBar from '@/components/recommend-title-bar'
import SongsCover from '@/components/songs-cover'

import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/actionCreators'
import { RECOMMEND } from '@/common/constance'
import { hotRecommendMenu } from '@/common/local-data'

const HotRecommend = memo(() => {
  const { hotRecommends } = useSelector((state: any) => {
    return {
      hotRecommends: state.getIn(["recommendReducer", "hotRecommends"])
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(RECOMMEND.HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <RecommendTitleBar title='热门推荐' keywords={hotRecommendMenu}></RecommendTitleBar>
      <div className='recommend-list'>
        {
          hotRecommends.map((item: any) => {
            return (
              <SongsCover key={item.id} info={item} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend