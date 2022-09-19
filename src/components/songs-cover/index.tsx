import React, { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/data-format'

import { ISongsCoverProps } from '../types'
import { SongsCoverWrapper } from './style'
/**
 * 歌曲封面组件
 * 
 */
const SongsCover = memo((props: ISongsCoverProps) => {
  const { info } = props
  return (
    <SongsCoverWrapper right=''>
      <div className='cover-top'>
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        {(info?.copywriter || info?.creator?.nickname)? `by ${info?.copywriter || info?.creator?.nickname}` : null}
      </div>
    </SongsCoverWrapper>
  )
})

export default SongsCover