import { getRandomNumber } from "@/utils/math-util"
import { parseLyric } from "@/utils/parse-lyric"
import { getLyric, getSongDetail } from "../api/player"
import { PLAYER_ACTION_TYPE, SEQUENCE_TYPE } from "./constants"

export const changeSongDetailAction = (res: any) => {
  return {
    type: PLAYER_ACTION_TYPE.CHANGE_CURRENT_SONG,
    currentSong: res
  }
}

export const changePlayListAction = (playList: any[]) => {
  return {
    type: PLAYER_ACTION_TYPE.CHANGE_PLAY_LIST,
    playList
  }
}

export const changeCurrentSongIndexAction = (currentSongIndex: number) => {
  return {
    type: PLAYER_ACTION_TYPE.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
  }
}

export const changeSequenceAction = (sequence: SEQUENCE_TYPE) => {
  return {
    type: PLAYER_ACTION_TYPE.CHANGE_SEQUENCE,
    sequence
  }
}

export const changeCurrentSong = (tag: number) => {
  return (dispatch: any, getState: any) => {
    const currentSequence = getState().getIn(["playerReducer", "sequence"])
    let currentSongIndex = getState().getIn(["playerReducer", "currentSongIndex"])
    const playList: any[] = getState().getIn(["playerReducer", "playList"])
    if (playList.length <= 1) {
      return
    }
    switch (currentSequence) {
      case SEQUENCE_TYPE.SEQUENCE_RANDOM:
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break
      default:
        // 顺序播放或单曲循环
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1
        }
    }
    // currentIndex 确定，播放歌曲
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeSongDetailAction(currentSong))
    dispatch(getLyricAction(currentSong.id))
  }
}

export const changeLyricAction = (lyric: any[]) => {
  return {
    type: PLAYER_ACTION_TYPE.CHANGE_LYRIC,
    lyric
  }
}

export const changeCurrentLyricIndexAction = (currentLyricIndex: number) => {
  return {
    type: PLAYER_ACTION_TYPE.CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
  }
}

export const getSongDetailAction = (ids: number) => {
  return async (dispatch: any, getState: any) => {
    // 1. 根据 id 查找 playList 中是否包含该歌曲
    const playList: any[] =  getState().getIn(["playerReducer", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2. 判断是否找到歌曲
    let song = null
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeSongDetailAction(song))
    } else {
      const res: any = await getSongDetail(ids)
      song = res.songs && res.songs[0]
      if (!song) return
      // 将最新的歌曲添加到播放列表中
      const newPlayList = [...playList]
      newPlayList.push(song)
      dispatch(changePlayListAction(newPlayList))
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
      dispatch(changeSongDetailAction(song))
    }
    dispatch(getLyricAction(song.id))
  }
}

export const getLyricAction = (id: number) => {
  return async (dispatch: any) => {
    const res: any = await getLyric(id)
    const lyricList = parseLyric(res.lrc.lyric)
    dispatch(changeLyricAction(lyricList))
  }
}