import React, { PureComponent } from 'react'
import { View } from 'react-native'

import NetInfo from '@react-native-community/netinfo'

export default class ConnectionChecker extends PureComponent {
	state = {
		active: false
	}

	componentDidMount() {
		const unsubscribe = NetInfo.addEventListener(state => {
			console.log('Connection type', state.type)
			console.log('Is connected?', state.isConnected)
		})

		unsubscribe()
	}

	show = () => {
		this.setState({ active: true })
	}

	hide = () => {
		this.setState({ active: false })
	}

	render() {
		return this.state.active && <View></View>
	}
}
