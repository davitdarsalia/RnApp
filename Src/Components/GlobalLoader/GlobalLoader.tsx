import React, { PureComponent } from 'react'

import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { ColorList } from '../../Constants/Colors'

export default class GlobalLoader extends PureComponent {
	state = {
		active: false
	}

	show = () => {
		this.setState({ active: true })
	}

	hide = () => {
		this.setState({ active: false })
	}

	render() {
		return (
			this.state.active && (
				<View style={loaderStyles.wrapper}>
					<ActivityIndicator size='large' animating color={ColorList.BOGColor} />
				</View>
			)
		)
	}
}

const loaderStyles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000033'
	}
})
