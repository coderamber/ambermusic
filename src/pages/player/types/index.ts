import { SEQUENCE_TYPE } from "../store/constants"

export interface IAppPlayerBarStyled {
  isPlaying?: boolean
  sequence?: number
}

// store type
export interface IPlayerState {
  // 播放列表
  playList: any[]
  // 当前播放的歌曲的索引
  currentSongIndex: number
  // 当前播放的歌曲
  currentSong: object,
  // 播放顺序
  sequence: SEQUENCE_TYPE,
  // 歌词
  lyric: any[],
  // 当前播放歌词的下标
  currentLyricIndex: number
}

export interface IPlayerAction extends IPlayerState {
  type: string
}