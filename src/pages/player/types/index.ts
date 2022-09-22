export interface IAppPlayerBarStyled {
  isPlaying?: boolean
  sequence?: number
}

// store type
export interface IPlayerState {
  currentSong: object
}

export interface IPlayerAction extends IPlayerState {
  type: string
}