import React, { memo, useEffect } from 'react'
import RecommendTitleBar from '@/components/recommend-title-bar'
import TopRanking from '@/components/top-ranking'

import { RankingWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'
import { RANKING_TYPE } from '@/common/constance'
const Ranking = memo(() => {
  const { upRanking, newRanking, originRanking } = useSelector((state: any) => ({
    upRanking: state.getIn(["recommendReducer", "upRanking"]),
    newRanking: state.getIn(["recommendReducer", "newRanking"]),
    originRanking: state.getIn(["recommendReducer", "originRanking"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(RANKING_TYPE.UP_RANKING))
    dispatch(getTopListAction(RANKING_TYPE.NEW_RANKING))
    dispatch(getTopListAction(RANKING_TYPE.ORIGIN_RANKING))
  }, [dispatch])
  return (
    <RankingWrapper>
      <RecommendTitleBar title='榜单'/>
      <div className="tops">
        <TopRanking info={upRanking}/>
        <TopRanking info={newRanking}/>
        <TopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})

export default Ranking