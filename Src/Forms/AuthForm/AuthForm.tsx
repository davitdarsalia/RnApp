import React from 'react'
import { Formik } from 'formik'
import { View } from 'react-native'

import GenericInput from '../../Primitives/GenericInput/GenericInput'
import { Button } from '../../Primitives/Button/Button'
import { LoginSchema } from './Validation'
import { RWidth } from '../../Generics/ResponsiveUnits'
import { useNavigation } from '@react-navigation/native'
import { RootStackGenericProp } from '../../../types'
import { useContainer } from '../../Components/GlobalLoader/loaderRef'

interface Props {}

export const AuthForm: React.FC<Props> = ({}) => {
	const { replace } = useNavigation<RootStackGenericProp<'mainStack'>>()
	const onLogin = () => {
		replace('mainStack')
	}

	const { loader } = useContainer()

	return (
		<Formik
			initialValues={{
				email: 'darsalia.david1998@gmail.com',
				password: 'David.1998!'
			}}
			onSubmit={values => {
				loader()
				onLogin()
			}}
			validationSchema={LoginSchema}
		>
			{({ values, touched, errors, handleChange, handleBlur, setFieldTouched, handleSubmit }) => {
				return (
					<View>
						<GenericInput
							value={values.email}
							touched={touched.email}
							errors={touched.email && errors.email ? errors.email : ''}
							placeholder={'Enter An Email'}
							onChangeText={handleChange('email')}
							onBlur={() => {
								handleBlur('email')
								setFieldTouched('email')
							}}
							errorText={errors.email}
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
								errors.email === undefined && errors.password === undefined ? false : true
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
