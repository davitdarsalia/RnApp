import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'
import UserInactivity from 'react-native-user-inactivity'

import { AuthScreen } from '../Screens/AuthScreen'
import { MainStack } from './MainStack'
import { useCustomSelector } from '../Store/Hooks/Hooks'

import jwt_decode from 'jwt-decode'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
	const token = useCustomSelector(state => state.authReducer.access_token)

	const { Screen, Navigator } = RootStack

	return (
		<NavigationContainer>
			<UserInactivity onAction={(isActive: boolean) => {}}>
				<Navigator
					screenOptions={{
						headerShown: false
					}}
					initialRouteName='authStack'
				>
					{token.length === 296 ? (
						<Screen name='mainStack' component={MainStack} />
					) : (
						<Screen name='authStack' component={AuthScreen} />
					)}
				</Navigator>
			</UserInactivity>
		</NavigationContainer>
	)
}
