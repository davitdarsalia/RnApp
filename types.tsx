import { StackNavigationProp } from '@react-navigation/stack'

/*
  RootStack
*/
export type RootStackParamList = {
	authStack: undefined
	mainStack: undefined
}

export type RootStackGenericProp<T extends keyof RootStackParamList & string> = StackNavigationProp<
	RootStackParamList,
	T
>

/*
  BottomTabs
*/
export type MainStackParamList = {
	home: undefined
	cart: undefined
	favourites: undefined
	profile: undefined
}

export type MainStackScreenGenericProp<T extends keyof MainStackParamList & string> = StackNavigationProp<
	MainStackParamList,
	T
>
