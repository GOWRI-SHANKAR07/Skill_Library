import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  PermissionsAndroid,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import {
  AddBtn,
  AddBtnCont,
  AddTxt,
  Container,
  H1,
  IconCont,
  InfoCont,
  LevelBtn,
  LevelCont,
  LevelTxt,
  Name,
  Optionsbtn,
  OptionsCont,
  OptionsTxt,
  Phone,
  ProfileCont,
  ProfilePic,
  ReferCont,
  Skill,
} from '../styles/Profile';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OctIcons from 'react-native-vector-icons/Octicons';
import { windowHeight, windowWidth } from '../utils/Dimension';
import { Colors, H2 } from '../Constants/Theme';
import auth from '@react-native-firebase/auth';
import { setOldUser } from '../Redux/actions';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { APIURI } from '../Constants/APIconfigs';
// window width, height
export const Window = {
  width: windowWidth,
  height: windowHeight,
};

const { width, height } = Window;

const details = [
  {
    detail: 'Add Email',
    id: 1,
  },
  {
    detail: 'Skill Description',
    id: 2,
  },
  {
    detail: 'Add Your Gender',
    id: 3,
  },
  {
    detail: 'Add Your DOB',
    id: 4,
  },
  {
    detail: 'Set Cool User Name',
    id: 5,
  },
];

const ProfileScreen = ({ navigation }) => {
  // let data = useSelector(state => state.mainReducer.name);
  const dispatch = useDispatch();
  const stateData = useSelector(state => state.mainReducer);

  // retrieving name from state & storing in the userName var
  const userName = stateData.oldUser.hasOwnProperty('user')
    ? stateData.oldUser.user.name
    : '';
  const userID = stateData.oldUser.hasOwnProperty('user')
    ? stateData.oldUser.user.id
    : '';

  // retrieving mobilenum from state & storing in the userPhone var
  const userPhone = stateData.oldUser.hasOwnProperty('user')
    ? stateData.oldUser.user.phone
    : '';

  // retrieving tagline from state & storing in the userTagline var
  const userTagline = stateData.oldUser.hasOwnProperty('user')
    ? stateData.oldUser.user.tagline
    : '';

  const userGender = stateData.oldUser.hasOwnProperty('user')
    ? stateData.oldUser.user.gender
    : '';

  console.log(stateData);
  const handleLogOut = () => {
    dispatch(setOldUser(false));
    auth().signOut();
  };

  const [filePath, setFilePath] = useState({});

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const chooseFile = async type => {
    console.log('here');
    // let isStoragePermitted = await requestExternalWritePermission();
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    // console.log(isStoragePermitted);
    try {
      launchImageLibrary(options, response => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        // console.log('response -> ', response);
        setFilePath(response);
        console.log(userID);
        axios
          .put(APIURI + `user/${userID}`, {
            profile_photo: response.assets[0].base64,
          })
          .then(res => console.log(res.data))
          .catch(e => console.log(e));
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(filePath.assets[0].uri);

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('EditProfileScreen')}>
        <InfoCont>
          <TouchableOpacity>
            <ProfilePic source={require('../assets/images/profile.jpg')} />
            {/* <ProfilePic
            source={{uri: `data:image/gif;base64,${filePath.assets[0].base64}`}}
          /> */}
          </TouchableOpacity>
          <IconCont>
            <TouchableOpacity
              onPress={() => {
                console.log('in func');
                // console.log(filePath.assets[0].base64);
                chooseFile('photo');
              }}>
              <Ionicons
                name="share-social-outline"
                color={'#000'}
                size={25}
                style={styles.share}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log(userTagline)}><Text>Click</Text></TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <AntDesign name="edit" color={'#000'} size={25} />
            </TouchableOpacity> */}
          </IconCont>
          <ProfileCont>
            <Name>{userName}</Name>
            <Skill>{userGender}</Skill>
            <Phone>{userPhone}</Phone>
          </ProfileCont>
        </InfoCont>
      </TouchableWithoutFeedback>
      <ScrollView style={{ marginBottom: windowHeight * 0.1 }}>
        {/*<H1>40% of Profile Completeness</H1>
        <H2 style={styles.h2}>Add details to complete now</H2>
        <FlatList
          style={{height: windowHeight * 0.07}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={details} // set render data in flatlist
          keyExtractor={item => item.id.toString()} // keyExtractor convert INT  'item.id' value to string
          numColumns={1}
          renderItem={({item}) => (
            <TouchableOpacity style={{backgroundColor: 'white'}}>
              <AddTxt>{item.detail}</AddTxt>
            </TouchableOpacity>
          )}
        /> */}
        {/* <LevelCont>
          <LevelBtn>
            <LevelTxt>Level 1</LevelTxt>
          </LevelBtn>
          <ReferCont>
            <H1
              style={{
                marginLeft: windowWidth * 0.13,
              }}>
              2 Referral
            </H1>
            <H2 style={{color: 'black'}}>You Refered 2 friends</H2>
          </ReferCont>
        </LevelCont> */}
        <TouchableNativeFeedback
          // hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          onPress={() => navigation.navigate('ProfileSettings')}
          background={TouchableNativeFeedback.Ripple(Colors.secondary)}
        >
          <Optionsbtn style={styles.option}>
            <OptionsCont>
              <Ionicons
                name="settings-outline"
                color={Colors.primary}
                size={30}
              />
              <OptionsTxt>Profile Settings</OptionsTxt>
            </OptionsCont>
          </Optionsbtn>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          // onPress={() => navigation.navigate('')}
          background={TouchableNativeFeedback.Ripple(Colors.secondary)}
        >
          <Optionsbtn style={styles.option}>
            <OptionsCont>
              <MaterialIcons
                name="privacy-tip"
                color={Colors.primary}
                size={30}
              />
              <OptionsTxt>Privacy Policy</OptionsTxt>
            </OptionsCont>
          </Optionsbtn>
        </TouchableNativeFeedback>

        {/* <Optionsbtn style={styles.option}>
          <OptionsCont>
            <MaterialIcons name="security" color={Colors.primary} size={30} />
            <OptionsTxt>Security Settings</OptionsTxt>
          </OptionsCont>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
            <FontAwesome5 name="play" color={Colors.arrow} size={25} />
          </TouchableOpacity>
        </Optionsbtn>

        <Optionsbtn style={styles.option}>
          <OptionsCont>
            <Ionicons name="heart-outline" color={Colors.primary} size={30} />
            <OptionsTxt>Referral & MMS ID</OptionsTxt>
          </OptionsCont>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
            <FontAwesome5 name="play" color={Colors.arrow} size={25} />
          </TouchableOpacity>
        </Optionsbtn>

        <Optionsbtn style={styles.option}>
          <OptionsCont>
            <OctIcons name="file-badge" color={Colors.primary} size={30} />
            <OptionsTxt>Badges</OptionsTxt>
          </OptionsCont>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
            <FontAwesome5 name="play" color={Colors.arrow} size={25} />
          </TouchableOpacity>
        </Optionsbtn> */}


        <View
          style={{
            // width: windowWidth * 0.4,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('red')}
            onPress={() => handleLogOut()}>
            <View
              style={{
                elevation: 5,
                backgroundColor: Colors.white,
                width: windowWidth * 0.4,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 8,
                marginVertical: 10,
                marginLeft: 30,
              }}>
              <MaterialIcons name="logout" color={'red'} size={30} />
              <OptionsTxt style={{ color: 'red' }}>Logout</OptionsTxt>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  share: {
    paddingBottom: windowHeight * 0.05,
  },

  h2: {
    marginLeft: windowWidth * 0.08,
    color: Colors.black,
  },
  option: {
    borderTopColor: '#fff',
  },
});
