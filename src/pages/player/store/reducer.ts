import { Map } from 'immutable'
import { IPlayerAction, IPlayerState } from '../types'
import { PLAYER_ACTION_TYPE } from './constants'

const state: IPlayerState = {
  currentSong: {}
}

const defaultState = Map(state)


function reducer(state = defaultState, action: IPlayerAction) {
  switch (action.type) {
    case PLAYER_ACTION_TYPE.CHANGE_SONGS_DETAIL:
      return state.set("currentSong", action.currentSong)
    default:
      return state
  }
}

export default reducer