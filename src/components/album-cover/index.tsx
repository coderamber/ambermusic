import React, { memo } from 'react'

import { INewAlbumProps } from '../types'
import { AlbumWrapper } from './style'

import { getSizeImage } from '@/utils/data-format'

const AlbumCover = memo((props: INewAlbumProps) => {
  const { info, size = 153, width = 130, bgp = -845 } = props
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <div className='cover image_cover'></div>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{ info.name }</div>
        <div className="artist text-nowrap">{ info.artist.name }</div>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover