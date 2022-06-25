import axios from 'axios'
import Config from 'react-native-config'

import { interruptLoading, startLoading } from './../Components/GlobalLoader/loaderRef'

export const axionsInstance = axios.create({
	baseURL: Config.base_url
})

axionsInstance.interceptors.request.use(
	request => {
		startLoading()

		return request
	},

	error => {
		return Promise.reject(error)
	}
)

axionsInstance.interceptors.response.use(
	response => {
		interruptLoading()

		return response
	},
	error => {
		if (error.response.status === 404) {
			console.log('Hanlder - Not Found')
		}
		return Promise.reject(error)
	}
)
