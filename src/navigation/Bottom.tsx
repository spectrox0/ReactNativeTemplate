import {BottomTabBar} from '@organisms/BottomNavigation/BottomNavigation';
import {NavigationHeader} from '@organisms/NavigationHeader/NavigationHeader';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {HomeScreen} from 'screens';
const {Navigator, Screen} = createBottomTabNavigator();

export const BottomNavigation: FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      tabBar={BottomTabBar}
      screenOptions={{header: NavigationHeader}}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
