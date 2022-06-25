import React, { useEffect } from 'react'
import { View } from 'react-native'

import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { RootStackGenericProp } from '../../../types'

import { useCustomDispatch } from '../../Store/Hooks/Hooks'
import { useAuth } from '../../Hooks/UseAuth'

import { Button } from '../../Primitives/Button/Button'
import { LoginSchema } from './Validation'
import { RWidth } from '../../Generics/ResponsiveUnits'

import GenericInput from '../../Primitives/GenericInput/GenericInput'
import { AxiosGlobalInstance } from '../../Configs/AxiosGlobalInstance'

interface Props {}

export const AuthForm: React.FC<Props> = ({}) => {
	const { replace } = useNavigation<RootStackGenericProp<'mainStack'>>()
	const dispatch = useCustomDispatch()

	const onLogin = () => {
		replace('mainStack')
	}

	const { login } = useAuth()

	return (
		<Formik
			initialValues={{
				username: 'davit',
				password: 'David.1998!'
			}}
			onSubmit={values => {
				dispatch(login(values.username, values.password))
			}}
			validationSchema={LoginSchema}
		>
			{({ values, touched, errors, handleChange, handleBlur, setFieldTouched, handleSubmit }) => {
				return (
					<View>
						<GenericInput
							value={values.username}
							touched={touched.username}
							errors={touched.username && errors.username ? errors.username : ''}
							placeholder={'Enter An Username'}
							onChangeText={handleChange('username')}
							onBlur={() => {
								handleBlur('username')
								setFieldTouched('username')
							}}
							errorText={errors.username}
						/>
						<GenericInput
							value={values.password}
							touched={touched.password}
							errors={touched.password && errors.password ? errors.password : ''}
							placeholder={'Enter A Password'}
							onChangeText={handleChange('password')}
							onBlur={() => {
								handleBlur('password')
								setFieldTouched('password')
							}}
							errorText={errors.password}
						/>
						<Button
							disabled={
								errors.username === undefined && errors.password === undefined ? false : true
							}
							style={{
								marginTop: RWidth(5)
							}}
							onPress={handleSubmit}
							onLongPress={() => console.log('Long Press')}
							title={'Submit'}
						/>
					</View>
				)
			}}
		</Formik>
	)
}
