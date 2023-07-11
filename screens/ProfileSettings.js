import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Dimensions,
  Animated,
  Platform,
  FlatList,
  Pressable,
  Button,
  Alert,
  ToastAndroid,
} from 'react-native';
import {
  Colors,
  Fonts,
  H1,
  H2,
  Normalize,
  ButtonFont3,
} from '../Constants/Theme';
import { Skillsearchcont2, Skillinp, Skillcont } from '../styles/SkillSelect';
import FormbackButton from '../components/buttons/FormbackButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../utils/Dimension';
import { abbrevs } from 'npm';
import { useDispatch, useSelector } from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  setName,
  setUserDescription,
  setUserDob,
  setUserGender,
  setUserName,
  setUserRole,
  setUserTagline,
} from '../Redux/actions';
import {
  FormCont,
  FormInput,
  FormInputBtn,
  FormInputDob,
  FormScroll,
  HeaderCont,
  InnerHeader,
  SaveBtnCont,
  SettingsCont,
} from '../styles/Settings';
import axios from 'axios';
import { APIURI } from '../Constants/APIconfigs';
import Modal from '../components/Popup-Modals/popup';
import ModalTester from '../components/Popup-Modals/popup';
import GenderPopup from '../components/Popup-Modals/GenderPopup';
import Entypo from 'react-native-vector-icons/Entypo';
import RolePopup from '../components/Popup-Modals/RolePopup';
import BottomPopup from '../components/Popup-Modals/BottomPopup';

const { height } = Dimensions.get('window');



const ProfileSettings = ({ navigation }) => {
  const details = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();
  // console.log('Details', details.oldUser.user.name);
  const [name, updName] = useState(details.oldUser.user.name);
  const [username, updUsername] = useState(details.oldUser.user.username);
  const [Tagline, updTagline] = useState(details.oldUser.user.Tagline);
  const [Work_Description, updDescription] = useState(details.oldUser.user.Work_Description);
  const [gender, updGender] = useState(details.oldUser.user.gender);
  const [job_Roll, updRole] = useState(details.oldUser.user.job_Roll);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [isGenderSelected, setIsGenderSelected] = useState('');
  const [isRoleSelected, setIsRoleSelected] = useState('');




  // retrieving name from state & storing in the userName var
  const userID = details.oldUser.hasOwnProperty('user')
    ? details.oldUser.user.id
    : '';

  const handleSave = () => {
    console.log(name);
    console.log(username);
    console.log(gender);
    console.log(Tagline);
    console.log(Work_Description);
    console.log(job_Roll);
    console.log(dob);
    dispatch(setName(name));
    dispatch(setUserName(username));
    dispatch(setUserTagline(Tagline));
    dispatch(setUserDob(dob));
    dispatch(setUserDescription(Work_Description));
    dispatch(setUserGender(gender));
    dispatch(setUserRole(job_Roll));
    // Alert.alert('Successfully Updated 👍')
    // console.log(updateUser);

    let updateUser = {
      name: name,
      username: username,
      Tagline: Tagline,
      // dob: dob,
      Work_Description: Work_Description,
      gender: gender,
      job_Roll: job_Roll,
    };
    console.log(updateUser);


    axios
      .put(APIURI + 'user/' + userID, updateUser)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });


    // console.log(APIURI + 'user/' + userID , updateUser );

  };


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState(removeTime(new Date()));

  function removeTime(date = new Date()) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ).toDateString();
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDob(removeTime(date));
    hideDatePicker();
  };


  const Gender = [
    { id: '0', gender: 'Male' },
    { id: '1', gender: 'Female' },
    { id: '2', gender: 'Other' },
  ]

  const Role = [
    { id: '1', role: 'Working Profession' },
    { id: '2', role: 'Student' },
    { id: '3', role: 'Others' },
  ]

  const GenderSelect = (item) => {
    setIsGenderSelected(item);
    updGender(item)
    console.log(isGenderSelected);
    setGenderModalVisible(false);
  };

  const RoleSelect = (item) => {
    setIsRoleSelected(item);
    updRole(item);
    console.log(isRoleSelected);
    setRoleModalVisible(false);
  };


  const offSet = useRef(new Animated.Value(0)).current;

  return (
    <SettingsCont>
      <HeaderCont>
        <InnerHeader>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <FormbackButton />
          </TouchableOpacity>
          <H1
            style={{
              color: 'black',
              marginLeft: 65,
              marginTop: 20,
              fontSize: 18,
              fontFamily: Fonts.PoppinsMedium,
            }}>
            ProfileSettings
          </H1>
          <SaveBtnCont>
            <TouchableOpacity
              onPress={() => handleSave()}
            >
              <ButtonFont3
                style={{
                  color: Colors.white,
                }}
              >
                Save
              </ButtonFont3>
            </TouchableOpacity>
          </SaveBtnCont>
        </InnerHeader>
      </HeaderCont>
      <FormCont>
        <FormScroll
          showsVerticalScrollIndicator={false}
          // scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offSet } } }],
            { useNativeDriver: false },
          )}>
          <H2
            style={{
              color: 'black',
              marginTop: windowHeight * 0.03,
              fontSize: Normalize(16),
              fontFamily: Fonts.PoppinsMedium,
            }}>
            Name
          </H2>
          <FormInput
            placeholder={'Eg. Karthik'}
            placeholderTextColor={Colors.greyplaceholder}
            value={name}
            onChangeText={val => updName(val)}
          />
          <H2
            style={{
              color: 'black',
              marginTop: windowHeight * 0.03,
              fontSize: Normalize(16),
              fontFamily: Fonts.PoppinsMedium,
            }}>
            Username
          </H2>
          <FormInput
            placeholder={'Eg. Karthik'}
            placeholderTextColor={Colors.greyplaceholder}
            value={username}
            onChangeText={val => updUsername(val)} />
          <H2
            style={{
              color: 'black',
              marginTop: windowHeight * 0.03,
              fontSize: Normalize(16),
              fontFamily: Fonts.PoppinsMedium,
            }}>
            Tagline
          </H2>
          <FormInput
            placeholder={'Eg. React-Native'}
            placeholderTextColor={Colors.greyplaceholder}
            value={Tagline}
            onChangeText={val => updTagline(val)} />
          <H2
            style={{
              color: 'black',
              marginTop: windowHeight * 0.03,
              fontSize: Normalize(16),
              fontFamily: Fonts.PoppinsMedium,
            }}>
            Date of Birth
          </H2>
          <FormInputDob
            value={dob}
            onPress={showDatePicker}
          >
            <Text
              style={{
                fontSize: Normalize(16),
                color: Colors.black,
                marginTop: windowHeight * 0.015,
                marginLeft: windowWidth * 0.06,
              }}>
              {dob ? dob.toString() : ''}
            </Text>
          </FormInputDob>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <AntDesign
            style={{
              width: windowWidth * 0.05,
              bottom: windowHeight * 0.045,
              left: windowWidth * 0.03,
            }}
            name="calendar"
            size={20}
            color="#00A8E8"
          />
          <H2
            style={{
              color: 'black',
              marginTop: windowHeight * 0.01,
              fontSize: Normalize(16),
              fontFamily: Fonts.PoppinsMedium,
            }}>
            Gender
          </H2>
          <BottomPopup visible={genderModalVisible}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column-reverse',
                alignSelf: 'flex-end',
              }}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  width: windowWidth,
                  height: windowHeight * 0.4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: Colors.greyBorder,
                  borderWidth: 1,
                  elevation: 5,
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 20,
                  paddingTop: windowHeight * 0.03,
                }}>
                <TouchableOpacity
                  onPress={() => setGenderModalVisible(!genderModalVisible)}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: windowWidth * 0.09,
                  }}
                >
                  <Entypo
                    name='circle-with-cross'
                    size={30}
                    color={Colors.black}
                  />
                </TouchableOpacity>
                <FlatList
                  data={Gender}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        paddingBottom: windowHeight * 0.01,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => GenderSelect(item.gender)}
                        style={
                          isGenderSelected == item.gender
                            ? {
                              width: windowWidth * 0.5,
                              borderRadius: 17,
                              backgroundColor: Colors.primary,
                              color: Colors.white,
                              padding: windowWidth * 0.02,
                              margin: windowWidth * 0.02,
                              borderColor: Colors.black,
                              elevation: 3,
                              color: Colors.black,
                            }
                            : {
                              width: windowWidth * 0.5,
                              backgroundColor: Colors.white,
                              elevation: 3,
                              borderRadius: 17,
                              fontFamily: Fonts.PoppinsLight,
                              padding: windowWidth * 0.02,
                              margin: windowWidth * 0.02,
                              fontSize: Normalize(18),
                              borderWidth: 0.5,
                              borderColor: Colors.greyBorder,
                            }
                        }>
                        <Text
                          style={
                            isGenderSelected == item.gender
                              ? {
                                fontFamily: Fonts.PoppinsMedium,
                                fontSize: Normalize(18),
                                textAlign: 'center',
                                color: Colors.white,
                              }
                              : {
                                fontFamily: Fonts.PoppinsMedium,
                                fontSize: Normalize(18),
                                textAlign: 'center',
                                color: Colors.black,
                              }}
                        >
                          {item.gender}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          </BottomPopup>
          <FormInputBtn
            onPress={() => setGenderModalVisible(!genderModalVisible)}
          >
            <Text
              style={{
                fontFamily: Fonts.PoppinsLight,
                fontSize: Normalize(16),
                color: Colors.black,
              }}
            >{gender ? gender : 'Select Your Gender'}</Text>
          </FormInputBtn>
          <H2
            style={{
              color: 'black',
              marginTop: windowHeight * 0.03,
              fontSize: Normalize(16),
              fontFamily: Fonts.PoppinsMedium,
            }}>
            Description
          </H2>
          <FormInput
            placeholder={'Enter Your Description'}
            multiline={true}
            value={Work_Description}
            onChangeText={val => updDescription(val)}
          />
          <H2
            style={{
              color: 'black',
              marginTop: windowHeight * 0.03,
              fontSize: Normalize(16),
              fontFamily: Fonts.PoppinsMedium,
            }}>
            Role
          </H2>
          <BottomPopup visible={roleModalVisible}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column-reverse',
                alignSelf: 'flex-end',
              }}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  width: windowWidth,
                  height: windowHeight * 0.4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: Colors.greyBorder,
                  borderWidth: 1,
                  elevation: 5,
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                }}>
                <TouchableOpacity
                  onPress={() => setRoleModalVisible(false)}
                  style={{
                    alignSelf: 'flex-end',
                    marginTop: windowHeight * 0.03,
                    marginRight: windowWidth * 0.09
                  }}
                >
                  <Entypo
                    name='circle-with-cross'
                    size={30}
                    color={Colors.black}

                  />
                </TouchableOpacity>
                <FlatList
                  data={Role}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <View>
                      <TouchableOpacity
                        onPress={() => RoleSelect(item.role)}
                        style={
                          isRoleSelected == item.role
                            ? {
                              width: windowWidth * 0.5,
                              borderRadius: 17,
                              backgroundColor: Colors.primary,
                              color: Colors.white,
                              padding: windowWidth * 0.02,
                              margin: windowWidth * 0.02,
                              borderColor: Colors.black,
                              elevation: 3,
                              color: Colors.black,
                            }
                            : {
                              width: windowWidth * 0.5,
                              backgroundColor: Colors.white,
                              elevation: 3,
                              borderRadius: 17,
                              fontFamily: Fonts.PoppinsLight,
                              padding: windowWidth * 0.02,
                              margin: windowWidth * 0.02,
                              fontSize: Normalize(18),
                              borderWidth: 0.5,
                              borderColor: Colors.greyBorder,
                            }
                        }>
                        <Text
                          style={
                            isRoleSelected == item.role
                              ? {
                                fontFamily: Fonts.PoppinsMedium,
                                fontSize: Normalize(18),
                                textAlign: 'center',
                                color: Colors.white,
                              }
                              : {
                                fontFamily: Fonts.PoppinsMedium,
                                fontSize: Normalize(18),
                                textAlign: 'center',
                                color: Colors.black,
                              }}
                        >
                          {item.role}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View >
          </BottomPopup>
          <FormInputBtn
            onPress={() => setRoleModalVisible(true)}
            style={{
              marginBottom: windowHeight * 0.05,
            }}
          >
            <Text
              style={{
                fontFamily: Fonts.PoppinsLight,
                fontSize: Normalize(16),
                color: Colors.black,
              }}
            >{job_Roll ? job_Roll : 'Select Your Role'}</Text>
          </FormInputBtn>
        </FormScroll>
      </FormCont>
    </SettingsCont>
  );
};
export default ProfileSettings;
