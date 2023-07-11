import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Cont,
  Formtxt2,
  Headercont,
  Heading,
  Headings,
  Nxtcont,
  Searchcont,
  Searchtxt,
  Txtcont,
} from '../styles/Base-Component';
import {windowWidth, windowHeight} from '../utils/Dimension';
import {useSelector, useDispatch} from 'react-redux';
const img = require('../assets/images/bg.png');
import {setName, setOldUser} from '../Redux/actions';
import FormbackButton from '../components/buttons/FormbackButton';
import {Colors} from '../Constants/Theme';
import {Fonts, H1, Normalize} from '../Constants/Theme';
import FormNextButton from '../components/buttons/FormNextButton';
import axios from 'axios';
import {APIURI} from '../Constants/APIconfigs';
//testing for dilli //
const NamesScreen = ({navigation}) => {
  const data = useSelector(state => state.name);
  const details = useSelector(state => state.mainReducer);
  const refresh = useSelector(state => state.mainReducer.refresh);
  const [Name, setNames] = useState(null);
  const dispatch = useDispatch();
  const handlenext = async () => {
    console.log(details);
    let newUser = {
      name: details.name,
      username: details.name,
      phone: details.phonenumber,
      longitude: details.longitude,
      latitude: details.latitude,
      skillList: `'${details.skill}'`,
    };
    console.log(newUser);
    axios
      .post(APIURI + 'user/registration', newUser)
      .then(res => {
        console.log(res.data);
        dispatch(setOldUser(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(setName(Name));
  }, [Name]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Location')}>
        <FormbackButton />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Image source={img} style={{height: 120, width: 120}} />
      </View>

      <Text
        style={{
          color: Colors.primary,
          fontSize: Normalize(32),
          fontFamily: Fonts.PoppinsBold,
          marginTop: 20,
        }}>
        How can we Call you ?
      </Text>
      <View>
        <H1
          style={{
            color: 'black',
            marginTop: 30,
            marginBottom: 10,
            fontFamily: Fonts.PoppinsMedium,
          }}>
          Enter your Name
        </H1>
      </View>
      <TextInput
        value={Name}
        style={
          Name
            ? {
                backgroundColor: Colors.white,
                elevation: 3,
                borderRadius: 15,
                padding: 10,
                paddingLeft: 20,
                color: Colors.black,
                fontFamily: Fonts.PoppinsMedium,
                fontSize: Normalize(20),
              }
            : {
                backgroundColor: Colors.white,
                elevation: 3,
                borderRadius: 15,
                padding: 10,
                paddingLeft: 20,
                color: Colors.black,
                fontFamily: Fonts.PoppinsMedium,
                fontSize: Normalize(18),
              }
        }
        placeholder={'Name'}
        underlineColorAndroid="transparent"
        placeholderTextColor={'#717070'}
        onChangeText={value => setNames(value)}></TextInput>
      <View
        style={{
          // flex: 1,
          // justifyContent: 'flex-end',
          // alignItems: 'flex-end',
          position: 'absolute',
          alignSelf: 'flex-end',
          right: 8,
          bottom: 20,
        }}>
        <TouchableOpacity onPress={() => handlenext()}>
          <FormNextButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NamesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
    padding: 22,
  },

  info: {
    justifyContent: 'center',
    flex: 0.4,
  },
});
