import React, { useEffect, useState } from 'react'

import Config from 'react-native-config'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'
import UserInactivity from 'react-native-user-inactivity'

import { AuthScreen } from '../Screens/AuthScreen'
import { MainStack } from './MainStack'
import { useSecureStorage } from '../Hooks/UseSecureStorage'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
	const { getValue, removeValue } = useSecureStorage()
	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		getValue('access_token').then(val => setToken(val))
	}, [])

	const { Screen, Navigator } = RootStack

	const renderCondition =
		token && token != null ? (
			<Screen name='mainStack' component={MainStack} />
		) : (
			<Screen name='authStack' component={AuthScreen} />
		)

	return (
		<NavigationContainer>
			<UserInactivity onAction={() => {}} timeForInactivity={parseInt(Config.inactivity_time)}>
				<Navigator
					screenOptions={{
						headerShown: false
					}}
					initialRouteName='authStack'
				>
					{renderCondition}
				</Navigator>
			</UserInactivity>
		</NavigationContainer>
	)
}
