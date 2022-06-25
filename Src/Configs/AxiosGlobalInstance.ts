import { axionsInstance } from './Interceptor'

export const AxiosGlobalInstance = async () => {
	const fetchData = async () => {
		try {
			console.log('Try')
			const response = await axionsInstance('https://jsonplaceholder.typicode.com/todos/1')
			console.log(response.data)
		} catch (error) {
			console.warn(error)
		}
	}

	fetchData()
}
