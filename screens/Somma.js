import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  FormHead,
  FormTitle,
  GreyPlaceHolderFont,
  H3,
  H2,
  H1,
  Para,
  SubTitle,
  ProfileNameFont,
  ButtonFont,
  ButtonFont2,
  Colors,
  PageTitle,
} from '../Constants/Theme';

import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {APIURI} from '../Constants/APIconfigs';

const Somma = () => {
  // let data = 'A';
  let data = useSelector(state => state.mainReducer.name);
  console.log(useSelector(state => state.mainReducer));

  const handleAPI = () => {
    axios
      .post(`${APIURI}user/new`, {
        name: 'test2',
        username: 'testUserfromFrontend2',
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      {/* <H3 style={{color: 'black'}}>Hello</H3>
      <H2 style={{color: 'black'}}>Hello</H2>
      <H1 style={{color: 'black'}}>Hello</H1>
      <SubTitle style={{color: 'black'}}>SubTitle</SubTitle>
      <Para style={{color: 'black'}}>
        EnsureSingleNavigator@http://192.168.43.82:8081/index.bundle?platform=android&dev=true&minify=false&app=com.ahb&modulesOnly=false&runModule=true:147016:24
      </Para>
      <FormTitle style={{color: 'black'}}>HEllo</FormTitle>
      <FormHead style={{color: 'black'}}>Edit SKill</FormHead>
      <GreyPlaceHolderFont style={{color: 'black'}}>
        Enter your name
      </GreyPlaceHolderFont>
      <ProfileNameFont style={{color: 'black'}}>Karthik</ProfileNameFont> */}
      <TouchableOpacity
        onPress={() => {
          console.log('signing out');
          auth().signOut();
        }}
        style={{
          backgroundColor: Colors.primary,
          padding: 13,
          borderRadius: 15,
        }}>
        <ButtonFont2 style={{color: 'white'}}>Logout</ButtonFont2>
      </TouchableOpacity>
      <PageTitle style={{margin: 8, color: 'black'}}>
        click to log out
      </PageTitle>
      <PageTitle style={{margin: 8, color: 'black'}}>{data}</PageTitle>
      <TouchableOpacity
        onPress={() => handleAPI()}
        style={{
          backgroundColor: Colors.secondary,
          padding: 13,
          borderRadius: 15,
        }}>
        <ButtonFont2 style={{color: 'black'}}>Connect DB</ButtonFont2>
      </TouchableOpacity>
      <PageTitle style={{margin: 8, color: 'black'}}>
        click to access backend
      </PageTitle>
      <PageTitle style={{margin: 8, color: 'black'}}>{data}</PageTitle>
    </View>
  );
};

export default Somma;
