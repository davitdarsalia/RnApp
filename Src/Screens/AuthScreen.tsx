import React, { useEffect } from 'react'
import { View } from 'react-native'

import { AuthContainer } from '../Containers/AuthContainer'
import { GlobalStyles } from '../globalStyles'
import { authAPI } from '../Services/AuthService'
import { customDispatch } from '../Store/Hooks/CustomDispatch'

interface Props {}

export const AuthScreen: React.FC<Props> = ({}) => {
	return (
		<View style={GlobalStyles.globalWrapperAuth}>
			<AuthContainer />
		</View>
	)
}
