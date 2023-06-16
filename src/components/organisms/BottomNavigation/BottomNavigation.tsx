import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import React, {FC} from 'react';
import {screens} from 'src/utils/screenName';

export const BottomTabBar: FC<BottomTabBarProps> = ({navigation, state}) => {
  const onSelect = (index: number) => {
    navigation.navigate(state.routeNames[index]);
  };
  return (
    <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
      <BottomNavigationTab title={screens.home.toUpperCase()} />
    </BottomNavigation>
  );
};
