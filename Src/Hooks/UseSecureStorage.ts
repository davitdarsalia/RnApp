import * as SecureStore from 'expo-secure-store'

export const useSecureStorage = () => {
	const setValue = async (key: string, value: string) => {
		await SecureStore.setItemAsync(key, value)
	}

	const getValue = async (key: string) => {
		let result = await SecureStore.getItemAsync(key)

		return result
	}

	const removeValue = async (key: string) => {
		await SecureStore.deleteItemAsync(key)
	}

	return { setValue, getValue, removeValue }
}
