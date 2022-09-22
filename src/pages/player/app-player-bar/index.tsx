import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Slider } from 'antd'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { getSongDetailAction } from '../store/actionCreators'
import { formatDate, getSizeImage, getSongPlayUrl } from '@/utils/data-format'

const AppPlayerBar = memo(() => {
  // page state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  // store state
  const { currentSong } = useSelector((state: any) => ({
    currentSong: state.getIn(["playerReducer", "currentSong"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // get store state
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  
  // audio node
  const audioRef = useRef<HTMLAudioElement>(null)

  // other attribute
  const duration = (currentSong && currentSong.dt) || 0
  const artName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'

  // handle function
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.src = getSongPlayUrl(currentSong.id)
      audioRef.current.play()
    }
  }
  const playTime = (e: any) => {
    // 取消拖动过程中进度条跳跃问题
    if (!isChanging) {
      // 计算进度条
      setProgress(currentTime / duration * 100)
      // 设置当前播放时间
      setCurrentTime(e.target.currentTime * 1000)
    }
  }
  const sliderChange = useCallback((value: number) => {
    setIsChanging(true)
    const current = value / 100 * duration
    setCurrentTime(current)
    setProgress(value)
  }, [duration])
  const sliderAfterChange = useCallback((value: number) => {
    setIsChanging(false)
    const current = value / 100 * duration / 1000
    audioRef.current!.currentTime = current
    setCurrentTime(current * 1000)
  },[duration])
  return (
    <PlaybarWrapper className='sprite_playbar'>
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play" onClick={e => playMusic()}></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <a href="/#" className="singer-name">{artName}</a>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{ formatDate(currentTime, "mm:ss") }</span>
                <span className="divider">/</span>
                <span className="duration">{ formatDate(duration, "mm:ss") }</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
        <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={playTime} />
    </PlaybarWrapper>
  )
})

export default AppPlayerBar