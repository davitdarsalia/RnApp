import { IUserAuth, IUserReg } from './../Models/Auth'
import axios from 'axios'

import { authSlice } from './AuthSlice'
import { AppDispatch } from '../config'
import { axionsInstance } from '../../Configs/Interceptor'

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(authSlice.actions.loginRequest())
		const response = await axionsInstance.post<IUserAuth>(`http://localhost:8080/api/auth/sign-in`, {
			username,
			password
		})
		dispatch(authSlice.actions.loginSuccess(response.data))
	} catch (error) {
		dispatch(authSlice.actions.loginFailure('Auth Error'))
	}
}

export const signUp =
	(
		personalNumber: string,
		phoneNum: string,
		userName: string,
		email: string,
		firstName: string,
		lastName: string,
		ipAddress: string,
		password: string
	) =>
	async (dispatch: AppDispatch) => {
		try {
			dispatch(authSlice.actions.signUpRequest())
			const response = await axios.post<IUserReg>(`http://localhost:8080/api/auth/sign-in`, {
				personalNumber,
				phoneNum,
				userName,
				email,
				firstName,
				lastName,
				ipAddress,
				password
			})
			dispatch(authSlice.actions.signUpSuccess(response.data))
		} catch (error) {
			dispatch(authSlice.actions.signUpFailure('Auth Error'))
		}
	}
