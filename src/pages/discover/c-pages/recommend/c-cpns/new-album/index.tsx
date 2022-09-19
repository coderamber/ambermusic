import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Carousel } from 'antd'
import RecommendTitleBar from '@/components/recommend-title-bar'
import AlbumCover from '@/components/album-cover'

import { getNewAlbumAction } from '../../store/actionCreators'
import { RECOMMEND } from '@/common/constance'
import { AlbumWrapper } from './style'
import { CarouselRef } from 'antd/lib/carousel'
import { INewAlbumInfoType } from '@/components/types'

const NewAlbum = memo(() => {
  // get data from store
  const { newAlbums } = useSelector((state: any) => ({
    newAlbums: state.getIn(['recommendReducer', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(RECOMMEND.NEW_ALBUMS_LIMIT))
  }, [dispatch])

  // get swiper object
  const CarouselRef = useRef<CarouselRef>(null)
  return (
    <AlbumWrapper>
      <RecommendTitleBar title='新碟上架'/>
      <div className='content'>
        <div className='arrow arrow-left sprite_02' onClick={e => CarouselRef.current?.prev()}></div>
        <div className="album">
          <Carousel ref={CarouselRef} dots={false}>
            {
              [0, RECOMMEND.NEW_ALBUMS_PAGE_NUM - 1].map((item: number) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * RECOMMEND.NEW_ALBUMS_PER_PAGE, (item * RECOMMEND.NEW_ALBUMS_PER_PAGE + 1) * 5).map((iten: INewAlbumInfoType) => {
                        return (
                          <AlbumCover info={iten} key={iten.id} size={RECOMMEND.NEW_ALBUMS_SIZE} width={RECOMMEND.NEW_ALBUMS_WIDTH} bgp={RECOMMEND.NEW_ALBUMS_BGP}/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className='arrow arrow-right sprite_02' onClick={e => CarouselRef.current?.next()}></div>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum