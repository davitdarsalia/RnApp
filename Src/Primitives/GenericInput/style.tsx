import { StyleSheet } from 'react-native'

import { ColorList } from '../../Constants/Colors'
import { fontSizes } from '../../Constants/Enums'

import { RHeight, RWidth } from '../../Generics/ResponsiveUnits'

export const InputStyles = StyleSheet.create({
	outerWrapper: {
		marginVertical: RWidth(3),
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9
	},
	errorView: {
		height: RHeight(2.5),
		paddingHorizontal: RWidth(1),
		right: RHeight(0.3),
		bottom: RHeight(6.5),
		borderRadius: RWidth(0.5),
		position: 'absolute',
		backgroundColor: ColorList.White,
		zIndex: 1,
		borderTopWidth: RWidth(0.5),
		borderTopColor: ColorList.ErrorRed,
		borderLeftWidth: RWidth(0.5),
		borderLeftColor: ColorList.ErrorRed,
		borderRightWidth: RWidth(0.5),
		borderRightColor: ColorList.ErrorRed
	},
	errorTextStyle: {
		fontSize: fontSizes.errorTextSize,
		color: ColorList.ErrorRed,
		fontWeight: '700'
	},
	textInput: {
		width: RWidth(90),
		height: RHeight(8),
		borderRadius: RWidth(2),
		borderWidth: 0,
		paddingHorizontal: RWidth(5),
		alignSelf: 'center',
		fontSize: fontSizes.inputSize,
		backgroundColor: ColorList.Liberty,
		position: 'relative',
		color: ColorList.Blue
	},
	textInputFocused: {
		width: RWidth(90),
		height: RHeight(8),
		borderRadius: RWidth(2),
		paddingHorizontal: RWidth(5),
		alignSelf: 'center',
		fontSize: fontSizes.inputSize,
		backgroundColor: ColorList.White,
		borderWidth: RWidth(0.5),
		borderColor: ColorList.EditBlue,
		position: 'relative',
		color: ColorList.Blue
	},
	textInputError: {
		width: RWidth(90),
		height: RHeight(8),
		borderRadius: RWidth(2),
		paddingHorizontal: RWidth(5),
		alignSelf: 'center',
		fontSize: fontSizes.inputSize,
		backgroundColor: ColorList.White,
		borderWidth: RWidth(0.5),
		borderColor: ColorList.ErrorRed,
		position: 'relative',
		color: ColorList.Blue
	},
	errorTextBorderError: {
		borderWidth: 1,
		borderColor: ColorList.ErrorRed
	},
	errorTextBorder: {
		borderWidth: 1,
		borderColor: ColorList.Blue
	}
})
