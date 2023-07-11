import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FormH4, FormH2, LoginButton, OTPInput} from '../../styles/Login';
import FormbackButton from '../../components/buttons/FormbackButton';
import {
  Colors,
  Fonts,
  H1,
  Normalize,
  PageTitle,
  ButtonFont,
  ButtonFont2,
} from '../../Constants/Theme';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useDispatch, useSelector} from 'react-redux';
import {setOldUser} from '../../Redux/actions';
import {CheckOldUser} from '../../Constants/APIrequest';
import axios from 'axios';

const img = require('../../assets/images/bg.png');
const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 90;

const OTPScreen = ({route, navigation}) => {
  const [Otpvalue, SetOtpValue] = useState();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  // const mobileNumber = route.params;
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  let resendOtpTimerInterval;
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  //on click of resend button
  const onResendOtpButtonPress = () => {
    //clear input field
    setValue('');
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    route.params.resendOTP(route.params.number);
    // todo
    console.log('todo: Resend OTP');
  };
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  // console.log(route);
  return (
    <View
      style={{
        flex: 1,
        padding: 22,
        backgroundColor: Colors.white,
        // justifyContent: 'center',
        // alignItems: 'flex-start',
      }}>
      <TouchableOpacity
        onPress={() => {
          route.params.setConfirm(false);
          navigation.goBack();
          // console.log(route);
        }}>
        <FormbackButton />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
          marginBottom: 20,
        }}>
        <Image source={img} style={{height: 120, width: 120}} />
      </View>
      {/* <Text>Enter OTP</Text> */}

      <Text
        style={{
          color: Colors.primary,
          fontFamily: Fonts.PoppinsBold,
          fontSize: Normalize(32),
        }}>
        Enter OTP
      </Text>
      <H1 style={{color: Colors.black}}>
        an 4 digit code has been sent to {route.params.number}
      </H1>

      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      {resendButtonDisabledTime > 0 ? (
        <View
          style={{flexDirection: 'row', marginTop: 35, alignItems: 'center'}}>
          <TouchableNativeFeedback>
            <View
              style={{
                elevation: 2,
                width: 120,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                backgroundColor: Colors.grey,
                borderRadius: 10,
              }}>
              <H1 style={{color: Colors.black}}>Resend OTP</H1>
            </View>
          </TouchableNativeFeedback>
          <H1 style={{color: Colors.black, margin: 10}}>
            {resendButtonDisabledTime} Seconds
          </H1>
        </View>
      ) : (
        <View
          style={{flexDirection: 'row', marginTop: 35, alignItems: 'center'}}>
          <TouchableNativeFeedback onPress={onResendOtpButtonPress}>
            <View
              style={{
                elevation: 2,
                width: 120,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                backgroundColor: Colors.secondary,
                borderRadius: 10,
              }}>
              <H1 style={{color: Colors.black}}>Resend OTP</H1>
            </View>
          </TouchableNativeFeedback>
          <H1 style={{color: Colors.black, margin: 10}}>
            {resendButtonDisabledTime} Seconds
          </H1>
        </View>
      )}

      <View style={{alignItems: 'center', marginTop: 80}}>
        <TouchableNativeFeedback onPress={() => route.params.onsubmit(value)}>
          <View
            style={{
              elevation: 3,
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              backgroundColor: Colors.primary,
              borderRadius: 20,
            }}>
            <ButtonFont2 style={{color: Colors.white}}>Verify OTP</ButtonFont2>
          </View>
        </TouchableNativeFeedback>
      </View>

      {/* <TouchableOpacity
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => route.params.onsubmit(Otpvalue)}>
        <LoginButton
        //  onPress={() => props.onSubmit(654321)
        >
          <Text>Verify</Text>
        </LoginButton>
      </TouchableOpacity> */}
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,

    height: 40,
    lineHeight: 38,
    fontSize: 20,
    fontFamily: Fonts.PoppinsSemiBold,
    borderWidth: 1,
    borderColor: Colors.greyplaceholder,
    elevation: 4,
    textAlign: 'center',
    borderRadius: 8,
    backgroundColor: Colors.white,
    color: Colors.black,
  },
  focusCell: {
    borderColor: Colors.primary,
  },
});
