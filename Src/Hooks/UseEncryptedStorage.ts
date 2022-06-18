import EncryptedStorage from 'react-native-encrypted-storage'

export const useEncryptedStorage = () => {
	return {
		setValue,
		getValue,
		removeValue,
		removeAllValues
	}
}

const setValue = async (key: string, value: any) => {
	try {
		await EncryptedStorage.setItem(key, value)
	} catch (error) {
		console.warn(error, 'UseEncryptedStorageHook Error: setValue')
	}
}

const getValue = async (key: string) => {
	try {
		return await EncryptedStorage.getItem(key)
	} catch (error) {
		console.warn(error, 'UseEncryptedStorageHook Error: getValue')
	}
}

const removeValue = async (key: string) => {
	try {
		await EncryptedStorage.removeItem(key)
	} catch (error) {
		console.warn(error, 'UseEncryptedStorageHook Error: removeValue')
	}
}

const removeAllValues = async () => {
	try {
		await EncryptedStorage.clear()
	} catch (error) {
		console.warn(error, 'UseEncryptedStorageHook Error: removeAllValues')
	}
}
