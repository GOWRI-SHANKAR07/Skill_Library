import {View, Text, } from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import NavigationContainer from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/MessageScreen';
import Somma from '../screens/Somma';
import {Colors, Fonts, GreyPlaceHolderFont} from '../Constants/Theme';
import HomeScreen from '../screens/HomeScreen';
import {inboxParticipants} from '../Redux/store';
import ProfileSettings from '../screens/ProfileSettings';
import ProfileScreen from '../screens/ProfileScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
// import UserProfileScreen from '../components/User ProfileScreen';
import UserSearchResult from '../components/UserSearchResult';
import SearchBox from '../components/SearchBox';

import SearchScreen from '../screens/SearchScreen';

import SearchResult from '../screens/SearchResult';
import {useSelector} from 'react-redux';
import AddingSkills from '../screens/AddingSkills';
import JobpostScreen from '../screens/JobpostScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Search from '../screens/Search';
import AddSkill from '../components/Popup-Modals/AddSkill';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  const stateData = useSelector(state => state.mainReducer);
  const userID = stateData.oldUser.user ? stateData.oldUser.user.id : 0;

  useEffect(() => {
    inboxParticipants(userID);
    // console.log(stateData.oldUser.user.id)
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Mesaages') {
            iconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'JobpostScreen') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          }


          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={23}
              color={focused ? Colors.primary : Colors.black}
            />
          );
        },
      })}
      labeled={false}
      shifting={true}
      activeColor={'white'}
      inactiveColor={'black'}
      barStyle={{
        backgroundColor: Colors.white,
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.8,
        shadowRadius: 50.0,
        elevation: 24,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,

        position: 'absolute',
        bottom: 0,
        padding: 10,
        width: '100%',
        height: 68,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="JobpostScreen" component={JobpostScreen} />
      <Tab.Screen name="Mesaages" component={MessageScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />

      {/* <Tab.Screen name="Somma" component={Somma} /> */}
      {/* <Tab.Screen name="Somma" component={Somma} /> */}

      {/* <Tab.Screen
      name="ChatScreen"
      component={ChatScreen}
        
    /> */}
    </Tab.Navigator>
  );
}

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        {/* <Stack.Screen name="Somma" component={UserProfileScreen} /> */}
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />

        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="AddSkill" component={AddSkill} />
        <Tab.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Tab.Screen name="AddingSkills" component={AddingSkills} />
        <Tab.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
