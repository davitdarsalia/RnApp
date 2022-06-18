import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { RootNavigator } from './Src/Navigation/RootRouter'

import { store } from './Src/Store'

import GlobalLoader from './Src/Components/GlobalLoader/GlobalLoader'
import ConnectionChecker from './Src/Components/ConnectionChecker/ConnectionChecker'

import { LoaderRef } from './Src/Components/GlobalLoader/loaderRef'

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<RootNavigator />
				<GlobalLoader ref={LoaderRef} />
				<ConnectionChecker />
			</SafeAreaProvider>
		</Provider>
	)
}
