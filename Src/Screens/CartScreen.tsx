import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { AxiosGlobalInstance } from '../Configs/AxiosGlobalInstance'
import { useSecureStorage } from '../Hooks/UseSecureStorage'
import { useCustomDispatch } from '../Store/Hooks/Hooks'
import { signUp } from '../Store/Reducers/ActionCreators'
import Config from 'react-native-config'

interface Props {}

export const CartScreen: React.FC<Props> = ({}) => {
	const { removeValue } = useSecureStorage()
	useEffect(() => {
		AxiosGlobalInstance()
	}, [])

	return (
		<View>
			<Text>CartScreen</Text>
		</View>
	)
}
