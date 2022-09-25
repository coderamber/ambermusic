import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'
const Player = memo(() => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>PlayerInfo</h2>
          <h2>SongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>Song</h2>
          <h2>SimiSong</h2>
          <h3>Download</h3>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default Player