import { NavigationContainer } from '@react-navigation/native'

import GlobalLoader from '../Components/GlobalLoader/GlobalLoader'

export type GlobalRefs = {
	navigator: ReturnType<typeof NavigationContainer> | null
	loader: GlobalLoader | null
}
