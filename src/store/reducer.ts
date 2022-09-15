import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store'

const cReducer = combineReducers({
  recommendReducer
})

export default cReducer;