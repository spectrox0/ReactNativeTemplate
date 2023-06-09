import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '@organisms/NavigationHeader/NavigationHeader';
import {HomeScreen} from 'screens';

const Stack = createNativeStackNavigator();
export const Navigation: FC = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{header: NavigationHeader}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};
