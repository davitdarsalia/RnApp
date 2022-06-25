import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import { PixelRatio } from 'react-native'

type UnitScale = number

export const RWidth = (arg: UnitScale): number => {
	return responsiveWidth(arg)
}

export const RHeight = (arg: UnitScale): number => {
	return responsiveHeight(arg)
}

export const UnitScale = (arg: UnitScale): number => {
	return PixelRatio.getPixelSizeForLayoutSize(arg)
}

export const RFontSize = (arg: UnitScale): number => {
	return responsiveFontSize(arg)
}
