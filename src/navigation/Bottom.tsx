import {BottomTabBar} from '@organisms/BottomNavigation/BottomNavigation';
import {NavigationHeader} from '@organisms/NavigationHeader/NavigationHeader';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {HomeScreen} from '@screens';
const {Navigator, Screen} = createBottomTabNavigator();

export const BottomNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        tabBar={BottomTabBar}
        screenOptions={{header: NavigationHeader}}>
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
