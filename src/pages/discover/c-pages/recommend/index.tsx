import React, { memo } from 'react'
import TopBanner from './c-cpns/top-banner'

import { RecommendWrapper } from './style'
const Recommend = () => {

  return (
    <RecommendWrapper>
      <TopBanner/>
    </RecommendWrapper>
  )

}
export default memo(Recommend)