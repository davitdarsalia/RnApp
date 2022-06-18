import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IUserAuth } from './../Models/Auth'

const initialState: IUserAuth = {
	isLoading: false,
	errorMessage: '',
	message: '',
	access_token: '',
	access_token_exp: '',
	refresh_token: '',
	refresh_token_exp: ''
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
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
			state.errorMessage = action.payload.errorMessage
		}
	},
	extraReducers: {}
})

export default authSlice.reducer
