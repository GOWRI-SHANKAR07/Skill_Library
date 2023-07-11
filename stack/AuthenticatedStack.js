import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Registration from './Registration';
import Home from './Home';
import {useDispatch, useSelector} from 'react-redux';
import {setOldUser} from '../Redux/actions';
import {APIURI} from '../Constants/APIconfigs';
import auth from '@react-native-firebase/auth';
const AuthenticatedStack = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.mainReducer.authState);
  const phoneNumber = useSelector(state => state.mainReducer.phonenumber);
  // auth().signOut();

  const oldUser = useSelector(state => state.mainReducer.oldUser);
  const refresh = useSelector(state => state.mainReducer.refresh);

  const fetcholduser = async () => {
    await axios
      .post(`${APIURI}user/login`, {
        // phone: user.phoneNumber.slice(3),
        phone: phoneNumber,
      })
      .then(res => {
        console.log('from API', res.data);
        dispatch(setOldUser(res.data));
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    fetcholduser();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetcholduser();
  //   }, 2000);
  // }, []);

  if (oldUser == false) {
    return <Home />;
  } else {
    console.log('newuser');
    return <Registration />;
    console.log(oldUser);
  }

  // return <Home />;
};

export default AuthenticatedStack;
