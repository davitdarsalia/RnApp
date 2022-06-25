import React from 'react'
import { View } from 'react-native'

import { AuthContainer } from '../Containers/AuthContainer'
import { GlobalStyles } from '../globalStyles'

interface Props {}

export const AuthScreen: React.FC<Props> = ({}) => {
	return (
		<View style={GlobalStyles.globalWrapperAuth}>
			<AuthContainer />
		</View>
	)
}
