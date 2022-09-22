import { getSongDetail } from "../api/player"
import { PLAYER_ACTION_TYPE } from "./constants"

export const changeSongDetailAction = (res: any) => {
  return {
    type: PLAYER_ACTION_TYPE.CHANGE_SONGS_DETAIL,
    currentSong: res.songs[0]
  }
}

export const getSongDetailAction = (ids: number) => {
  return async (dispatch: any) => {
    const res = await getSongDetail(ids)
    dispatch(changeSongDetailAction(res))
  }
}