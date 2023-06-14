import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '@organisms/NavigationHeader/NavigationHeader';
import {SignIn, SignUp} from 'screens';
import {screens} from 'utils/screenName';

const Stack = createNativeStackNavigator();
export const Navigation: FC = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName={screens.signIn}
        screenOptions={{header: NavigationHeader}}>
        <Stack.Screen name={screens.signIn} component={SignIn} />
        <Stack.Screen name={screens.signUp} component={SignUp} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};
