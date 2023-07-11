import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  style,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import flag from '../../assets/images/Flag.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PhoneInput from 'react-native-phone-number-input';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import {
  AppTitle,
  FormH2,
  FormH3,
  LoginButton,
  NumberInput,
} from '../../styles/Login';

import {ButtonFont2, Colors, Fonts, H1} from '../../Constants/Theme';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import OTPScreen from './OTPScreen';
import SkillScreen from '../SkillScreen';
import {setRefresh} from '../../Redux/actions';
// auth().signInWithPhoneNumber('+91 1234567890');

const LoginScreen1 = ({route, navigation}) => {
  // const [user, setUser] = useState(null);
  const [mobile, setMobile] = useState();
  const [confirm, setConfirm] = useState(null);
  // const [code, setCode] = useState(null);
  // const [authenticated, setAutheticated] = useState(false);

  const authStatechk = useSelector(state => state.authState);
  const refresh = useSelector(state => state.mainReducer.refresh);
  const dispatch = useDispatch();
  async function signIn(phoneNumber) {
    try {
      const confimation = await auth().signInWithPhoneNumber(
        `+91 ${phoneNumber}`,
      );
      setConfirm(confimation);
    } catch (error) {
      alert(error);
    }
  }
  async function confirmVerificationCode(code) {
    try {
      console.log('confirming');
      await confirm.confirm(code);

      setConfirm(null);
      dispatch(setRefresh(!refresh));
    } catch (error) {
      alert('Invalid code');
      console.log(error);
    }
  }

  // auth().signOut();
  // if (authenticated) {
  //   setAutheticated = true;
  // }
  if (confirm) {
    console.log('going');
    navigation.navigate('OtpScreen', {
      onsubmit: confirmVerificationCode,
      number: mobile,
      resendOTP: signIn,
      setConfirm: setConfirm,
    });
  }

  const handlePhoneNumber = number => {
    setMobile(number);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{bottom: 50, height: 120, width: 120}}
      />
      <AppTitle>Skill Library</AppTitle>
      <FormH2>Welcome</FormH2>
      <H1
        style={{
          textAlign: 'center',
          color: Colors.greyDark,
          fontFamily: Fonts.PoppinsBold,
        }}>
        login to get Connected By Skill
      </H1>
      <NumberInput
        elevation={4}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          width: '85%',
          // padding: 20,
          backgroundColor: '#ffff',
          shadowColor: '#000000',
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 3,
            width: 4,
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={flag}
            style={{marginLeft: 10, height: 15, width: 15, borderRadius: 2}}
          />
          <Text style={{marginLeft: 8, color: '#717070'}}>+91</Text>
          <Text
            style={{
              marginLeft: 8,
              color: '#717070',
              fontSize: 24,
              fontWeight: '200',
            }}>
            |
          </Text>
        </View>
        <TextInput
          style={{
            flexGrow: 1,
            marginLeft: 10,
            fontSize: 18,
            fontWeight: '500',
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          placeholder="Mobile Number"
          underlineColorAndroid="transparent"
          placeholderTextColor={'#717070'}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={text => handlePhoneNumber(text)}
        />
      </NumberInput>
      <TouchableOpacity
        // onPress={() => navigation.navigate('OtpScreen')}
        onPress={() => signIn(mobile)}
        style={{alignItems: 'center'}}>
        <LoginButton>
          <ButtonFont2 style={{color: '#ffff'}}>Login/SignUp</ButtonFont2>
        </LoginButton>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen1;
