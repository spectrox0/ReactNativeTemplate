import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {FCC} from 'src/types/common';
import {styles} from './Layout.styles';
import {useTheme} from 'src/hooks/useTheme';
export const MainLayout: FCC = ({children}) => {
  const barStyle =
    useTheme().theme.colorSchema === 'dark' ? 'light-content' : 'dark-content';
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle={barStyle} />}
      {children}
    </View>
  );
};
