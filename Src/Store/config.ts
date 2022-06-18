import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import authReducer from './Reducers/AuthSlice'

const rootReducer = combineReducers({
	authReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootStateType = ReturnType<typeof rootReducer>
export type StoreType = ReturnType<typeof setupStore>
export type AppDispatch = StoreType['dispatch']
