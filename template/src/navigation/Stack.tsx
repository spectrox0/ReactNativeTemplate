import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '@organisms';
import {SignInScreen, SignUpScreen} from '@screens';
import {screens} from '@utils/screenName';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screens.signIn}
        screenOptions={{header: NavigationHeader}}>
        <Stack.Screen name={screens.signIn} component={SignInScreen} />
        <Stack.Screen name={screens.signUp} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
