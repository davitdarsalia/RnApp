import React, { useEffect, useState } from 'react'
import { Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { AuthForm } from '../Forms/AuthForm/AuthForm'
import { WrapperModal } from '../Components/WrapperModel/WrapperModel'

interface Props {}

export const AuthContainer: React.FC<Props> = ({}) => {
	return (
		<KeyboardAwareScrollView
			enableAutomaticScroll
			scrollEnabled
			extraHeight={100}
			style={{ position: 'relative', backgroundColor: '#0057B8', flex: 1 }}
			resetScrollToCoords={{ x: 0, y: 0 }}
		>
			<WrapperModal>
				<AuthForm />
			</WrapperModal>
		</KeyboardAwareScrollView>
	)
}
