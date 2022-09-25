import { Map } from 'immutable'
import { IPlayerAction, IPlayerState } from '../types'
import { PLAYER_ACTION_TYPE, SEQUENCE_TYPE } from './constants'

const state: IPlayerState = {
  currentSong: {},
  currentSongIndex: 0,
  playList: [],
  sequence: SEQUENCE_TYPE.SEQUENCE_CIRCLE,
  lyric: [],
  currentLyricIndex: 0
}

const defaultState = Map(state)


function reducer(state = defaultState, action: IPlayerAction) {
  switch (action.type) {
    case PLAYER_ACTION_TYPE.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case PLAYER_ACTION_TYPE.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case PLAYER_ACTION_TYPE.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex)
    case PLAYER_ACTION_TYPE.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence)
    case PLAYER_ACTION_TYPE.CHANGE_LYRIC:
      return state.set("lyric", action.lyric)
    case PLAYER_ACTION_TYPE.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex)
    default:
      return state
  }
}

export default reducer