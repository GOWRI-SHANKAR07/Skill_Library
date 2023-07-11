import React, {useState, useEffect} from 'react';

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import {Colors, Fonts, H1, H2, Normalize} from '../Constants/Theme';
import {Skillsearchcont2, Skillinp, Skillcont} from '../styles/SkillSelect';
// import { Container, SearchBoxCont } from '../styles/SearchBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {AppTitle} from '../styles/Login';
import SearchBox from '../components/SearchBox';
import {windowWidth} from '../utils/Dimension';
import {APIURI} from '../Constants/APIconfigs';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setSearchResult} from '../Redux/actions';

import messaging from '@react-native-firebase/messaging';
const TOPIC = 'Notification';

const HomeScreen = ({navigation}) => {
  const [text, setText] = useState('');

  let stateData = useSelector(state => state.mainReducer);

  // retrieving name from state & storing in the userName var
  const address = stateData.oldUser.hasOwnProperty('user')
    ? stateData.oldUser.user.address
    : '';

  const dispatch = useDispatch();
  const textHandler = val => {
    setText(val);
  };

  const textClearHandler = () => {
    setText('');
  };

  const requestUserPermission = async () => {
    //On ios,checking permission before sending and receiving messages
    const authStatus = await messaging().requestPermission();
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };
  const getFcmToken = () => {
    // Returns an FCM token for this device
    messaging()
      .getToken()
      .then(fcmToken => {
        console.log('FCM Token -> ', fcmToken);
      });
  };
  const receiveNotificationFromQuitState = () => {
    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          showToast(
            'getInitialNotification:' +
              'Notification caused app to open from quit state',
          );
        }
      });
  };
  const receiveBackgroundNotification = () => {
    messaging().onNotificationOpenedApp(async remoteMessage => {
      if (remoteMessage) {
        showToast(
          'onNotificationOpenedApp: ' +
            'Notification caused app to open from background state',
        );
      }
    });
  };
  //stop listening for new messages.
  const unsubscribeDeviceTopic = messaging().onMessage(async remoteMessage => {
    showToast('New notification arrived' + JSON.stringify(remoteMessage));
  });
  const backgroundThread = () => {
    //It's called when the app is in the background or terminated
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      showToast('Background notification' + JSON.stringify(remoteMessage));
    });
  };
  const subscribeTopicToGetNotification = () => {
    /**
     * based on Topic, FCM server to send targeted
     * messages to only those devices subscribed to that topic
     */
    messaging()
      .subscribeToTopic(TOPIC)
      .then(() => {
        console.log(`Topic: ${TOPIC} Suscribed`);
      });
  };
  useEffect(() => {
    if (requestUserPermission()) {
      getFcmToken();
    } else {
      console.log('Not Authorization status:', authStatus);
    }
    receiveNotificationFromQuitState();
    receiveBackgroundNotification();
    backgroundThread();
    subscribeTopicToGetNotification();

    return () => {
      unsubscribeDeviceTopic;
      // messaging().unsubscribeFromTopic(TOPIC);
    };
  }, []);
  const showToast = message => {
    if (Platform.OS == 'ios') {
      alert(message);
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 22,
        }}>
        <View
          style={{
            // justifyContent: 'space-around',
            // alignItems: 'center',
            flexDirection: 'row',
          }}>
          <AntDesign name="enviromento" size={20} color={Colors.primary} />

          <H2
            style={{
              color: 'black',
              marginLeft: 15,
              fontSize: 12,
              fontFamily: Fonts.PoppinsMedium,

              // marginTop: -20,
            }}>
            {address.slice(0, 30) + '...'}
          </H2>
        </View>
        <Image
          source={require('../assets/images/logo.png')}
          style={{height: 50, width: 50}}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <AppTitle style={{fontSize: 38}}>Skill Library</AppTitle>
        <View style={{alignItems: 'flex-start'}}>
          {/*  <H1
            style={{
              textAlign: 'center',
              color: Colors.greyDark,
              fontFamily: Fonts.PoppinsBold,
              fontSize: Normalize(16),
              marginLeft: 22,

              // marginRight: 150,
              // marginTop: 181,
            }}>
            Search a Skill
          </H1> */}
          {/* <SearchBox  /> */}

          <View
            style={{
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableNativeFeedback
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Skillcont>
                <Skillsearchcont2
                  style={{
                    elevation: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <AntDesign name="search1" size={20} color={Colors.primary} />
                  <View
                    // value={text}
                    // placeholder="Try logo Designer"
                    // placeholderTextColor={Colors.greyplaceholder}
                    // onChangeText={textHandler}
                    style={{flexGrow: 1, marginLeft: 10}}>
                    <Text
                      style={{
                        fontFamily: Fonts.PoppinsMedium,
                        color: Colors.black2,
                      }}>
                      Search a skill
                    </Text>
                  </View>
                </Skillsearchcont2>
              </Skillcont>
            </TouchableNativeFeedback>
            {/* <View

       
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}> */}
            {/*   <TouchableNativeFeedback
              onPress={async () => {
                await axios
                  .post(`${APIURI}search`, {
                    Id: stateData.oldUser.user.id,
                    skill: text,
                    long: stateData.oldUser.user.longitude,
                    lat: stateData.oldUser.user.latitude,
                  })
                  .then(res => {
                    dispatch(setSearchResult(res.data));
                  })
                  .catch(e => console.log(e));

                navigation.navigate('SearchResult', {
                  text: text,
                });
                console.log(text);
              }}>
              <View
                style={{
                  backgroundColor: Colors.primary,
                  padding: 13,
                  borderRadius: 15,
                  width: windowWidth * 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontFamily: Fonts.PoppinsMedium,
                  }}>
                  Search
                </Text>
                </View> 
            </TouchableNativeFeedback> */}
            {/* </View> */}
          </View>
        </View>

        <Image source={require('../assets/images/homepage.png')} />
      </View>
    </View>
  );
};
export default HomeScreen;
