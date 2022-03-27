import {StackNavigationProp} from '@react-navigation/stack';

export type RouteList = {
   AuthStack: undefined;
   MainStack: undefined;
   ModalScreen: undefined;
};

export type AuthScreenList = {
   AuthScreen: undefined;
};

export type BottomTabsScreenList = {
   Home: undefined;
   Deals: undefined;
   Loans: undefined;
   Statistics: undefined;
};

export type AuthStackGenericProp<T extends keyof AuthScreenList & string> =
   StackNavigationProp<AuthScreenList, T>;

export type BottomTabsGenericProp<
   T extends keyof BottomTabsScreenList & string,
> = StackNavigationProp<BottomTabsScreenList, T>;

export type RootStackGenericProp<T extends keyof RouteList> =
   StackNavigationProp<RouteList, T>;
