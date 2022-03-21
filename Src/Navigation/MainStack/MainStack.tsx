import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import HomeIcon from '../../../assets/icons/Home.svg';
import HomeFocusedIcon from '../../../assets/icons/HomeFocused.svg';
import DealsIcon from '../../../assets/icons/Deals.svg';
import DealsFocusedIcon from '../../../assets/icons/DealsFocused.svg';
import LoanIcon from '../../../assets/icons/Loans.svg';
import LoanFocusedIcon from '../../../assets/icons/LoansFocused.svg';
import StatisticsIcon from '../../../assets/icons/Statistics.svg';
import StatisticsFocusedIcon from '../../../assets/icons/StatisticsFocused.svg';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabsNavigator} from '../types';

import {MyHome} from '../../Screens/Main/MyHome';
import {MyDeals} from '../../Screens/Main/MyDeals';
import {MyLoans} from '../../Screens/Main/MyLoans';
import {MyStatistics} from '../../Screens/Main/MyStatistics';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MainStackNavigator = createBottomTabNavigator<BottomTabsNavigator>();

const MainStack: React.FC = () => {
   const {Navigator, Screen} = MainStackNavigator;
   const {width, height} = Dimensions.get('screen');

   return (
      <Navigator
         screenOptions={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarStyle: {
               position: 'absolute',
               left: width * 0.15,
               right: width * 0.15,
               bottom: 35,
               backgroundColor: '#fff',
               borderRadius: 15,
               width: width * 0.7,
               height: 70,
               ...styles.shadow,
               alignItems: 'center',
               justifyContent: 'center',
               paddingBottom: 0,
            },
            tabBarBackground: () => {
               return <BlurView />;
            },
         }}
         initialRouteName="Home">
         <Screen
            name="Home"
            component={MyHome}
            options={{
               tabBarIcon: ({focused}) => {
                  return (
                     <TouchableOpacity>
                        {focused ? <HomeIcon /> : <HomeFocusedIcon />}
                     </TouchableOpacity>
                  );
               },
            }}
         />
         <Screen
            name="Deals"
            component={MyDeals}
            options={{
               tabBarIcon: ({focused}) => {
                  return (
                     <TouchableOpacity>
                        {focused ? <DealsFocusedIcon /> : <DealsIcon />}
                     </TouchableOpacity>
                  );
               },
            }}
         />
         <Screen
            name="Loans"
            component={MyLoans}
            options={{
               tabBarIcon: ({focused}) => {
                  return (
                     <TouchableOpacity>
                        {focused ? <LoanFocusedIcon /> : <LoanIcon />}
                     </TouchableOpacity>
                  );
               },
            }}
         />
         <Screen
            name="Statistics"
            component={MyStatistics}
            options={{
               tabBarIconStyle: {
                  fontWeight: 'bold',
               },
               tabBarIcon: ({focused}) => {
                  return (
                     <TouchableOpacity style={{}}>
                        {focused ? (
                           <StatisticsFocusedIcon />
                        ) : (
                           <StatisticsIcon />
                        )}
                     </TouchableOpacity>
                  );
               },
            }}
         />
      </Navigator>
   );
};

const styles = StyleSheet.create({
   shadow: {
      shadowColor: '',
      shadowOffset: {
         width: 0,
         height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
   },
});

export default MainStack;
