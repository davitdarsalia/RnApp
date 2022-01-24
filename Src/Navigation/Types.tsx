import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackScreenList = {
    tabStack: TabStackScreenList;
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

/* TabStack Stuff */

export type TabStackScreenList = {
    Feed: FeedStackScreenList;
    Map: FeedStackScreenList;
    Auth: undefined;
};

export type TabStackNavProp<T extends keyof TabStackScreenList> =
    StackNavigationProp<TabStackScreenList, T>;

/* TabStack Stuff */
