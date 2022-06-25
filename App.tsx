import React from 'react'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PersistGate } from 'redux-persist/integration/react'

import { RootNavigator } from './Src/Navigation/RootRouter'

import GlobalLoader from './Src/Components/GlobalLoader/GlobalLoader'
import ConnectionChecker from './Src/Components/ConnectionChecker/ConnectionChecker'

import { LoaderRef } from './Src/Components/GlobalLoader/loaderRef'
import { persistor, setupStore } from './Src/Store/config'

const store = setupStore()

LogBox.ignoreAllLogs(true)

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<SafeAreaProvider>
					<RootNavigator />
					<GlobalLoader ref={LoaderRef} />
					<ConnectionChecker />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	)
}
