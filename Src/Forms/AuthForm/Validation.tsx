import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
	username: Yup.string()
		.min(5, () => 'UserName Must Be At Least 5 Length Symbols')
		.max(100, () => 'Your UserName Is Too Long')
		.required(() => 'UserName Is Required'),

	password: Yup.string()
		.min(8, () => 'Password Must Be At Least 8 Length Symbols')
		.max(250, () => 'Your Password Is Too Long')
		.required(() => 'Password Is Required')
})
