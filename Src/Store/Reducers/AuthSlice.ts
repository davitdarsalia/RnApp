import { InitialState } from '@react-navigation/native'
import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { IUserAuth, IInitialState, IUserReg } from './../Models/Auth'

const initialState: IInitialState = {
	isLoading: false,
	errorMessage: '',
	message: '',
	access_token: '',
	access_token_exp: '',
	refresh_token: '',
	refresh_token_exp: '',
	userid: '',
	createdAt: ''
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// Registration
		signUpRequest(state) {
			state.isLoading = true
		},
		signUpSuccess(state, action: PayloadAction<IUserReg>) {
			state.isLoading = false
			state.userid = action.payload.userid
			state.createdAt = action.payload.createdAt
		},
		signUpFailure(state, action) {
			state.isLoading = false
			state.errorMessage = action.payload
		},
		// Login
		loginRequest(state) {
			state.isLoading = true
		},
		loginSuccess(state, action: PayloadAction<IUserAuth>) {
			state.isLoading = false
			state.message = action.payload.message
			state.access_token = action.payload.access_token
			state.access_token_exp = action.payload.access_token_exp
			state.refresh_token = action.payload.refresh_token
			state.refresh_token_exp = action.payload.refresh_token_exp
		},
		loginFailure(state, action) {
			state.isLoading = false
			state.errorMessage = action.payload
		}
	},
	extraReducers: {}
})

export default authSlice.reducer
