import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

// navigations
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import LoginScreen1 from '../screens/LoginScreens/LoginScreen1';
import OTPScreen from '../screens/LoginScreens/OTPScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen1}
          options={{header: () => null, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OTPScreen}
          options={{header: () => null, animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
