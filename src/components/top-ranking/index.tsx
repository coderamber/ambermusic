import { getSizeImage } from '@/utils/data-format'
import React, { memo } from 'react'
import { ITopListProps } from '../types'

import { TopRankingWrapper } from './style'

const TopRanking = memo((props: ITopListProps) => {
  const { info } = props
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <div className='image_cover'></div>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className='btn play sprite_02'></button>
            <button className='btn favor sprite_02'></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          info.tracks?.slice(0, 10).map((item: any, index: number) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className='name text-nowrap'>{item.name}</span>
                  <div className="operate">
                    <button className='btn sprite_02 play'></button>
                    <button className='btn sprite_icon2 addto'></button>
                    <button className='btn sprite_02 favor'></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})

export default TopRanking