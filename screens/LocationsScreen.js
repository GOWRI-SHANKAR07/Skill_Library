import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  TouchableNativeFeedback,
} from 'react-native';
import {
  Colors,
  Fonts,
  FormTitle,
  GreyPlaceHolderFont,
  H1,
  Normalize,
  Para,
} from '../Constants/Theme';

const img = require('../assets/images/bg.png');
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormbackButton from '../components/buttons/FormbackButton';
import FormNextButton from '../components/buttons/FormNextButton';

// import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {setLocation} from '../Redux/actions';

const LocationsScreen = ({navigation}) => {
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');

  const dispatch = useDispatch();
  console.log(useSelector(state => state.mainReducer));
  const getPermissions = async () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    }).then(data => {
      if (data === 'already-enabled' || data === 'enabled') {
        getOneTimeLocation(true);
      }
    });
  };
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // getOneTimeLocation();
          // let data = useSelector(state => state.mainReducer.name);

          console.log('permission granted');
          getOneTimeLocation(true);
        } else {
          console.log('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
  }, []);

  const getOneTimeLocation = async status => {
    try {
      if (status) {
        // setLocationStatus('Getting Location ...');

        // Geolocation.getCurrentPosition(
        //   //Will give you the current location
        //   position => {
        //     // setLocationStatus('You are Here');

        //     //getting the Longitude from the location json
        //     const currentLongitude = JSON.stringify(position.coords.longitude);

        //     //getting the Latitude from the location json
        //     const currentLatitude = JSON.stringify(position.coords.latitude);

        //     //Setting Longitude state
        //     dispatch(setLocation(currentLongitude, currentLatitude));
        //     setCurrentLongitude(currentLongitude);
        //     //Setting Longitude state
        //     setCurrentLatitude(currentLatitude);
        //     // console.log(currentLatitude, currentLongitude);
        //   },
        //   error => {
        //     // setLocationStatus(error.message);
        //     console.log(error);
        //   },
        //   {
        //     enableHighAccuracy: false,
        //     timeout: 30000,
        //     maximumAge: 1000,
        //   },
        // );
      } else {
        getPermissions();
      }
    } catch (error) {
      getPermissions();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Skill')}
      >
        <FormbackButton/>
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
        }}>
        Get Connected by Skill !
      </Text>
      <View>
        <H1
          style={{
            color: 'black',
            marginTop: 20,
            marginBottom: 10,
            fontFamily: Fonts.PoppinsMedium,
          }}>
          Provide Your Home Location
        </H1>
      </View>

      <TouchableNativeFeedback
        onPress={async () => {
          await getOneTimeLocation();
          console.log('in design code', currentLatitude, currentLongitude);
        }}>
        <View
          style={{
            color: Colors.black,
            flexDirection: 'row',
            backgroundColor: Colors.primary,
            padding: 15,
            borderRadius: 15,
            alignItems: 'center',
            marginBottom: 15,
            width: '100%',
            elevation: 5,
          }}>
          <AntDesign name="search1" color={Colors.white} size={22}></AntDesign>
          <GreyPlaceHolderFont style={{color: Colors.white, marginLeft: 10}}>
            Your Current Location
          </GreyPlaceHolderFont>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View
          style={{
            // margin: 22,
            width: '100%',
            color: Colors.black,
            flexDirection: 'row',
            backgroundColor: Colors.secondary,
            padding: 15,
            borderRadius: 15,
            alignItems: 'center',
            elevation: 5,
            marginBottom: 20,
          }}>
          <AntDesign name="search1" color={Colors.black} size={22}></AntDesign>
          <GreyPlaceHolderFont style={{color: Colors.black, marginLeft: 10}}>
            Search Your Location
          </GreyPlaceHolderFont>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.info}>
        <FormTitle style={{color: Colors.greyplaceholder}}>
          We never share your exact location to Anyone
        </FormTitle>
        <FormTitle style={{color: Colors.greyplaceholder}}>
          Provide your Home Location to get connected in your circle by Skill.
        </FormTitle>
      </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('Names')}>
          <FormNextButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationsScreen;

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
