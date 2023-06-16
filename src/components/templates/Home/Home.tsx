import React, {Text} from '@atoms';
import {FC} from 'react';
import {View} from 'react-native';

export const HomeTemplate: FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello word</Text>
    </View>
  );
};
