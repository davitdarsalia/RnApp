import React, { PureComponent, useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import NetInfo from '@react-native-community/netinfo'

interface Props {}

const ConnectionChecker: React.FC<Props> = ({}) => {
	const [active, setActive] = useState(false)

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			console.log('Connection type', state.type)
			console.log('Is connected?', state.isConnected)
		})

		return () => {
			unsubscribe()
		}
	}, [active])

	const show = () => {
		setActive(true)
	}

	const hide = () => {
		setActive(false)
	}

	return <View>{active && <Text>DD</Text>}</View>
}
export default ConnectionChecker
