import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import Ranking from './c-cpns/ranking'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
const Recommend = () => {

  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <Ranking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )

}
export default memo(Recommend)