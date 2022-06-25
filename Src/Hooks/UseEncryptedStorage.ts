import EncryptedStorage from 'react-native-encrypted-storage'

export const useEncryptedStorage = () => {
	return {
		setValue,
		getValue,
		removeValue,
		removeAllValues
	}
}

export const setValue = (key: string, value: any) => {
	;async () => {
		try {
			await EncryptedStorage.setItem(key, value)
		} catch (error) {
			console.warn(error, 'UseEncryptedStorageHook Error: setValue')
		}
	}
}

const getValue = (key: string) => {
	;async () => {
		try {
			return await EncryptedStorage.getItem(key)
		} catch (error) {
			console.warn(error, 'UseEncryptedStorageHook Error: getValue')
		}
	}
}

const removeValue = (key: string) => {
	;async () => {
		try {
			await EncryptedStorage.removeItem(key)
		} catch (error) {
			console.warn(error, 'UseEncryptedStorageHook Error: removeValue')
		}
	}
}

const removeAllValues = () => {
	;async () => {
		try {
			await EncryptedStorage.clear()
		} catch (error) {
			console.warn(error, 'UseEncryptedStorageHook Error: removeAllValues')
		}
	}
}
