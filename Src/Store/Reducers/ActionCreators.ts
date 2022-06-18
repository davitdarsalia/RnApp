import { IUserAuth } from './../Models/Auth'
import axios from 'axios'

import { authSlice } from './AuthSlice'
import { AppDispatch } from '../config'

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(authSlice.actions.loginRequest())
		const response = await axios.post<IUserAuth>(`http://localhost:8080/api/auth/sign-in`, {
			username,
			password
		})
		dispatch(authSlice.actions.loginSuccess(response.data))
	} catch (error) {
		dispatch(authSlice.actions.loginFailure('Auth Error'))
	}
}
