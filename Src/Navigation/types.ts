import {StackNavigationProp} from '@react-navigation/stack';

export type RouteList = {
   AuthStack: undefined;
   MainStack: undefined;
};

export type AuthScreenList = {
   AuthScreen: undefined;
};

export type BottomTabsNavigator = {
   Home: undefined;
   Deals: undefined;
   Loans: undefined;
   Statistics: undefined;
};

export type AuthStackGenericProp<T extends keyof AuthScreenList & string> =
   StackNavigationProp<AuthScreenList, T>;

export type BottomTabsGenericProp<
   T extends keyof BottomTabsNavigator & string,
> = StackNavigationProp<BottomTabsNavigator, T>;

export type RootStackGenericProp<T extends keyof RouteList> =
   StackNavigationProp<RouteList, T>;
