import * as React from 'react';
import {FC} from 'react';
import type {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {Text} from '@atoms';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';

export const NavigationHeader: FC<
  NativeStackHeaderProps | BottomTabHeaderProps
> = ({route}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop: insets.top}}>
      <Text maxFontSizeMultiplier={1} category="h4">
        {route.name} Screen
      </Text>
    </View>
  );
};
