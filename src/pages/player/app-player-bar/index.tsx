import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Slider, message } from 'antd'
import { NavLink } from 'react-router-dom'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { changeCurrentLyricIndexAction, changeCurrentSong, changeSequenceAction, getSongDetailAction } from '../store/actionCreators'
import { formatDate, getSizeImage, getSongPlayUrl } from '@/utils/data-format'
import { SEQUENCE_TYPE } from '../store/constants'

const AppPlayerBar = memo(() => {
  // page state
  const [currentTime, setCurrentTime] = useState(0)
  // 进度条百分比
  const [progress, setProgress] = useState(0)
  // 进度条是否在拖动
  const [isChanging, setIsChanging] = useState(false)
  // 歌曲是否正在播放
  const [isPlaying, setIsPlaying] = useState(false)

  // store state
  const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector((state: any) => ({
    currentSong: state.getIn(["playerReducer", "currentSong"]),
    sequence: state.getIn(["playerReducer", "sequence"]),
    lyricList: state.getIn(["playerReducer", "lyric"]),
    currentLyricIndex: state.getIn(["playerReducer", "currentLyricIndex"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // get store state
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    audioRef.current!.play().then(() => {
      setIsPlaying(true)
    }).catch(() => {
      setIsPlaying(false)
    })
  }, [currentSong])
  
  // audio node
  const audioRef = useRef<HTMLAudioElement>(null)

  // other attribute
  const duration = (currentSong && currentSong.dt) || 0
  const artName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'

  // handle function
  const playMusic = useCallback(() => {
    if (!isPlaying) {
      audioRef.current!.play()
    } else {
      audioRef.current!.pause()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const playTime = (e: any) => {
    // 获取当前播放时间
    const rightNow = e.target.currentTime
    // 取消拖动过程中进度条跳跃问题
    if (!isChanging) {
      // 计算进度条
      setProgress(currentTime / duration * 100)
      // 设置当前播放时间
      setCurrentTime(rightNow * 1000)
    }
    let lyricCurrentIndex = 0
    for (let i = 0; i < lyricList.length; i++) {
      const lyricItem = lyricList[i]
      if (rightNow * 1000 < lyricItem.time ) {
        lyricCurrentIndex = i;
        break;
      }
      if (rightNow * 1000 > lyricItem.time && i === lyricList.length - 1) {
        lyricCurrentIndex = i + 1
      }
    }
    const content = lyricList[lyricCurrentIndex - 1] && lyricList[lyricCurrentIndex - 1].content
    if (currentLyricIndex !== lyricCurrentIndex - 1) {
      dispatch(changeCurrentLyricIndexAction(lyricCurrentIndex - 1))
      message.open({
        key: "lyric",
        content,
        duration: 0
      })
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

    if (!isPlaying) {
      playMusic()
    }
  },[duration, isPlaying, playMusic])

  // change sequence func
  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  // change music
  const changeMusic = (tag: number) => {
    return dispatch(changeCurrentSong(tag))
  }

  // music ended
  const handleMusicEnded = () => {
    if (sequence === SEQUENCE_TYPE.SEQUENCE_SINGLE) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    } else {
      dispatch(changeCurrentSong(1))
    }
  }
  // tsx
  return (
    <PlaybarWrapper className='sprite_playbar'>
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_playbar play" onClick={e => playMusic()}></button>
          <button className="sprite_playbar next" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={"/discover/player"}>
              <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <a href="/#" className="singer-name">{artName}</a>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} tooltip={{open: false}}/>
              <div className="time">
                <span className="now-time">{ formatDate(currentTime, "mm:ss") }</span>
                <span className="divider">/</span>
                <span className="duration">{ formatDate(duration, "mm:ss") }</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
        <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={playTime} onEnded={handleMusicEnded} />
    </PlaybarWrapper>
  )
})

export default AppPlayerBar