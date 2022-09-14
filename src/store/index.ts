/**
 * 全局状态管理
 * 
 */
import { applyMiddleware, compose, legacy_createStore, ThunkAction } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type RootThunkAction = ThunkAction<void, RootState, unknown, any>

export default store