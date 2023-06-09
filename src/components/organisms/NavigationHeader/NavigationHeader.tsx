import * as React from 'react';
import {FC} from 'react';
import type {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {Text} from '@atoms';

export const NavigationHeader: FC<NativeStackHeaderProps> = ({
  scene,
  previous,
  navigation,
  route,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop: insets.top}}>
      <Text category="h1">{route.name}</Text>
    </View>
  );
};
