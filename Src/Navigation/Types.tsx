import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackScreenList = {
    feedStack: FeedStackScreenList;
    registrationScreen: undefined;
    loginScreen: undefined;
    registerScreen: undefined;
};

export type RootStackNavProp<J extends keyof RootStackScreenList> =
    StackNavigationProp<RootStackScreenList, J>;

/* FeedStack Stuff */

export type FeedStackScreenList = {
    mainScreen: undefined;
    allHotelsScreen: undefined;
    hotelDetailScreen: undefined;
};

export type FeedStackNavProp<T extends keyof FeedStackScreenList> =
    StackNavigationProp<FeedStackScreenList, T>;
