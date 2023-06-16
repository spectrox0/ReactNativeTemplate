import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '@organisms/NavigationHeader/NavigationHeader';
import {SignIn, SignUp} from 'src/screens';
import {screens} from 'src/utils/screenName';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export const Navigation: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={screens.signIn}
          screenOptions={{header: NavigationHeader}}>
          <Stack.Screen name={screens.signIn} component={SignIn} />
          <Stack.Screen name={screens.signUp} component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
