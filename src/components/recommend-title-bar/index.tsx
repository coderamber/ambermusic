import React, { memo } from 'react'
import { ITitleBarProps } from '@/components/types'
import {
  HeaderWrapper
} from './style'
import { IMenuList } from '@/common/types'
const RecommendTitleBar = memo((props: ITitleBarProps) => {
  const { title, keywords } = props
  return (
    <HeaderWrapper className='sprite_02'>
      <div className="left">
        <h3 className='title'>{title}</h3>
        <div className="keyword">
          {
            keywords?.map((item: IMenuList) => {
              return (
                <div className='item' key={item.title}>
                  <a href={item.link}>{item.title}</a>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

export default RecommendTitleBar