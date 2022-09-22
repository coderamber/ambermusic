import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '@/pages/player/store'

const cReducer = combineReducers({
  recommendReducer,
  playerReducer
})

export default cReducer;