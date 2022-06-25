import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import authReducer from './Reducers/AuthSlice'

const rootReducer = combineReducers({
	authReducer
})

const persistConfig = {
	key: 'root',
	whitelist: ['auth'],
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: [thunk]
	})
}

export const persistor = persistStore(setupStore())

export type RootStateType = ReturnType<typeof rootReducer>
export type StoreType = ReturnType<typeof setupStore>
export type AppDispatch = StoreType['dispatch']
