import { View, Text, Easing } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  headerStyleInterpolators,
  TransitionSpecs,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';
// import SkillScreen from '../screens/SkillScreen';
import NamesScreen from '../screens/NamesScreen';
import OTPScreen from '../screens/LoginScreens/OTPScreen';
import LocationsScreen from '../screens/LocationsScreen';
import Dummy from '../screens/Dummy';
// import Skill from '../screens/SkillScreen';
import HomeScreen from '../screens/HomeScreen';
import Somma from '../screens/Somma';
import ProfileScreen from '../screens/ProfileScreen';
import Home from './Home';
import UserProfileScreen from '../components/UserProfileScreen';
import SearchScreen from '../screens/SearchScreen';
// import SkillsScreen from '../screens/SKillsScreen';
import { SkillSelect } from '../styles/SkillSelect';

import SearchSkill from '../screens/SearchSkill';
import { SkillScreen } from '../screens';
import SelectSkill from '../screens/SelectSkill';
import ProfileSettings from '../screens/ProfileSettings';
import EditProfileScreen from '../screens/EditProfileScreen';
import EditProfile from '../screens/EditProfile';
import Profile from '../screens/Profile';
import AddSkill from '../components/Popup-Modals/AddSkill';
import Add from '../components/Popup-Modals/Add';

// import {LocationsScreen, SkillScreen, NamesScreen} from '../screens/';
const Stack = createNativeStackNavigator();

const Registration = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="Skill"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
        }}>
        <Stack.Screen
          name="Skill"
          component={SearchSkill}
          options={{
            header: () => null,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Location"
          component={LocationsScreen}
          options={{ header: () => null, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Names"
          component={NamesScreen}
          options={{ header: () => null, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ header: () => null, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{ header: () => null, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Somma"
          component={SearchScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ header: () => null, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{ header: () => null, animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Registration;
