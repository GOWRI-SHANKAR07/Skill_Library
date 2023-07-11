import React, {useEffect, useState} from 'react';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';
import Registration from './Registration';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SET_Authentication_State from '../Redux/actionTypes';
import {
  SetAuthenticationState,
  setOldUser,
  setPhoneNumber,
} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {CheckUser} from '../Constants/APIrequest';
import axios from 'axios';
import {APIURI} from '../Constants/APIconfigs';
import AuthenticatedStack from './AuthenticatedStack';

const Routes = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.mainReducer.authState);
  const phoneNumber = useSelector(state => state.mainReducer.phonenumber);
  // auth().signOut();

  const oldUser = useSelector(state => state.mainReducer.oldUser);
  const refresh = useSelector(state => state.mainReducer.refresh);

  auth().onAuthStateChanged(async user => {
    if (user) {
      // console.log(user.phoneNumber.slice(3));
      dispatch(setPhoneNumber(user.phoneNumber.slice(3)));
      dispatch(SetAuthenticationState(true));
    } else {
      dispatch(SetAuthenticationState(false));
    }
  });
  if (authenticated) {
    // oldUser = CheckUser(user.phoneNumber.slice(3));

    return <AuthenticatedStack />;
    console.log('users', typeof oldUser);
  }

  if (!authenticated) return <AuthStack />;

  return <Home />;
};

export default Routes;
