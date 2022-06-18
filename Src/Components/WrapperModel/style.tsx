import { StyleSheet } from 'react-native'
import { ColorList } from '../../Constants/Colors'
import { RHeight, RWidth } from '../../Generics/ResponsiveUnits'

export const ModalStyles = StyleSheet.create({
	modalWrapper: {
		width: RWidth(100),
		height: RHeight(110),
		paddingHorizontal: RWidth(10),
		paddingVertical: RWidth(10),
		backgroundColor: ColorList.White,
		borderTopLeftRadius: RWidth(4),
		borderTopRightRadius: RWidth(4),
		position: 'absolute',
		bottom: RHeight(-140),
		zIndex: 100,
		shadowColor: ColorList.ErrorRed,
		shadowOffset: {
			width: 0,
			height: RWidth(0.1)
		},
		shadowOpacity: 0.23,
		shadowRadius: 11.27,
		elevation: 14
	},
	pan: {
		alignSelf: 'center',
		backgroundColor: ColorList.LightBlue,
		width: RWidth(15),
		height: RHeight(0.5),
		borderRadius: RHeight(2),
		marginTop: RHeight(-4),
		marginBottom: RHeight(2)
	}
})
