import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  style,
  Dimensions,
  FlatList,
  TouchableNativeFeedback,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FormbackButton from '../components/buttons/FormbackButton';
import { APIURI } from '../Constants/APIconfigs';
import { AppTitle } from '../styles/Login';
import {
  Cont,
  Discriptiontxt,
  Headercont,
  Heading,
  Skillcont,
  Skillinp,
  SkillInput,
  Skillsearchcont,
  Skillsearchcont2,
  SkillSelectCont,
  SkillSuggest,
  SuggestCont,
} from '../styles/SkillSelect';
import { windowHeight, windowWidth } from '../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Fonts, Normalize } from '../Constants/Theme';
import FormNextButton from '../components/buttons/FormNextButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSkill } from '../Redux/actions';
import Add from '../components/Popup-Modals/AddSkill';
import BottomPopup from '../components/Popup-Modals/BottomPopup';

const AddingSkills = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [skills, setSkills] = useState([]);
  const [addSkills, setAddSkills] = useState([]);
  const [query, setQuery] = useState();
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  const [selectedSkills, setselectedSkills] = useState([]);

  useEffect(() => {
    axios
      .get(APIURI + `skillquery/${query}`)
      .then(res => {
        console.log(res.data);
        setData(res.data.skillsArr);
        console.log(selectedSkills.indexOf());
      })
      .catch(e => {
        console.log(e);
      });
  }, [query, display,]);

  // state
  const details = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();
  const userSkill = details.skill;

  const RemoveSkill = item => {
    const index1 = selectedSkills.indexOf(item);
    const index2 = display.indexOf(item);
    const index3 = data.indexOf(item);
    if (index1 === -1 && index2 > -1) {
      display.splice(index2, 1);
      selectedSkills.splice(index1, 1); // Remove array element
      // data.splice(index3, 1)
      console.log(selectedSkills);
      console.log(display);
      console.log(index1);
    } else {
      console.log('not executed');
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleClick = () => {
    setselectedSkills([...selectedSkills, addSkills]);
    dispatch(setSkill(selectedSkills));
    console.log(userSkill);
    ToastAndroid.show("Skills Succesfully Saved 👍", ToastAndroid.LONG);
  };

  const saveSkill = (skills) => {
    setAddSkills([...addSkills, skills]);
    console.log(userSkill);
  }

  const save = () => {
    setselectedSkills([...selectedSkills, addSkills]);
    dispatch(setSkill(selectedSkills));
    console.log(selectedSkills);
    console.log(userSkill);
    ToastAndroid.show("Skills Succesfully Saved 👍", ToastAndroid.LONG)

  }

  const renderitem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item.item);
          setDisplay([...display, item.item.skills]);
          setselectedSkills([...selectedSkills, item.item.id]);
          setQuery('');
          setData('');
        }}>
        <View
          style={{
            backgroundColor: Colors.white,
            elevation: 3,
            margin: 6,
            marginBottom: 5,
            border: 2,
            borderColor: Colors.greyBorder,
            borderRadius: 20,
            padding: 10,
            flexWrap: 'wrap',
          }}>
          <SkillSuggest>{item.item.skills}</SkillSuggest>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Cont>
      <View style={{ padding: windowWidth * 0.04 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen')}
        >
          <FormbackButton />
        </TouchableOpacity>
      </View>
      <Headercont>
        <Heading>Add Your Skill !</Heading>
      </Headercont>
      <View>
        <Skillcont>
          <Skillsearchcont style={{ elevation: 5 }}>
            <AntDesign
              style={styles.search}
              name="search1"
              size={20}
              color={Colors.greyDark}
            />
            <SkillInput
              placeholder="Search a Skill"
              onChangeText={text => setQuery(text)}
              value={query}
              placeholderTextColor={Colors.greyplaceholder}
              style={
                query
                  ? { color: Colors.black, fontFamily: Fonts.PoppinsMedium }
                  : { color: Colors.blues }
              }
            />
          </Skillsearchcont>
        </Skillcont>
      </View>
      <View>
        <SuggestCont
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderitem}
        />
      </View>
      <SkillSelectCont>
        <FlatList
          style={{
            marginTop: 15,
            width: windowWidth * 0.7,
            height: windowHeight * 0.5,
            // borderWidth: 2,
            // borderColor: '#000',
          }}
          data={display}
          key={item => item.id}
          numColumns={2}
          renderItem={item => (
            // console.log({display})
            <TouchableOpacity
              style={{
                backgroundColor: Colors.primary,
                elevation: 3,
                padding: 10,
                margin: 9,
                borderRadius: 15,
                width: windowWidth * 0.3,
                alignItems: 'center',
              }}
              onPress={() => RemoveSkill(item.item)}>
              <Text style={{ color: Colors.white }}>{item.item}</Text>
            </TouchableOpacity>
          )}
        />
      </SkillSelectCont>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
        }}>

      </View>
      <View>
        <TouchableOpacity
          onPress={() => handleClick()}
          style={{
            width: windowWidth * 0.5,
            backgroundColor: Colors.primary,
            elevation: 3,
            borderRadius: 25,
            fontFamily: Fonts.PoppinsLight,
            padding: windowWidth * 0.03,
            marginTop: windowHeight * 0.01,
            fontSize: Normalize(18),
            borderWidth: 0.5,
            borderColor: Colors.greyBorder,
            alignSelf: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: Fonts.PoppinsMedium,
              fontSize: Normalize(20),
              textAlign: 'center',
              color: Colors.white,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: windowWidth * 0.3,
          marginTop: windowHeight * 0.02,
        }}
      >
        <BottomPopup visible={modalVisible}>
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
                height: windowHeight * 0.6,
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
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
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
              <Text></Text>
              <View>
                <Skillcont>
                  <Skillsearchcont
                    style={{
                      borderWidth: 2,
                      borderColor: Colors.black,
                    }}
                  >
                    <AntDesign
                      style={styles.search}
                      name="search1"
                      size={20}
                      color="#717070"
                    />
                    <Skillinp
                      placeholder="Enter Your Skill"
                      placeholderTextColor={Colors.greyplaceholder}
                      onChangeText={(val) => setSkills(val)}
                    />
                    <TouchableOpacity
                      onPress={() => saveSkill(skills)}
                    >
                      <EvilIcon
                        name='check'
                        size={35}
                        style={{
                          marginTop: windowHeight * 0.011,
                        }}
                      />
                    </TouchableOpacity>
                  </Skillsearchcont>
                </Skillcont>
              </View>
              <View>
                <SkillSelectCont
                  style={{
                    top: windowHeight * 0.02,
                  }}
                >
                  <FlatList
                    style={{
                      width: windowWidth * 0.7,
                      height: windowHeight * 0.2,
                      // borderWidth: 2,
                      // borderColor: '#000',
                    }}
                    data={addSkills}
                    key={item => item.id}
                    numColumns={2}
                    renderItem={item => (
                      // console.log({display})
                      <TouchableOpacity
                        style={{
                          backgroundColor: Colors.primary,
                          elevation: 3,
                          padding: 10,
                          margin: 9,
                          borderRadius: 15,
                          width: windowWidth * 0.3,
                          alignItems: 'center',
                        }}
                        onPress={() => RemoveSkill(item.item)}>
                        <Text style={{ color: Colors.white }}>{item.item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </SkillSelectCont>
              </View>
              <TouchableOpacity
                onPress={() => save()}
                style={{
                  width: windowWidth * 0.5,
                  backgroundColor: Colors.primary,
                  elevation: 3,
                  borderRadius: 25,
                  top: windowHeight * 0.04,
                  fontFamily: Fonts.PoppinsLight,
                  padding: windowWidth * 0.02,
                  fontSize: Normalize(18),
                  marginBottom: windowHeight * 0.01,
                  marginLeft: windowWidth * 0.02,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.PoppinsMedium,
                    fontSize: Normalize(18),
                    textAlign: 'center',
                    color: Colors.white,
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  width: windowWidth * 0.5,
                  backgroundColor: Colors.secondary,
                  elevation: 3,
                  borderRadius: 25,
                  top: windowHeight * 0.04,
                  fontFamily: Fonts.PoppinsLight,
                  padding: windowWidth * 0.02,
                  fontSize: Normalize(18),
                  marginBottom: windowHeight * 0.01,
                  marginLeft: windowWidth * 0.02,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.PoppinsMedium,
                    fontSize: Normalize(18),
                    textAlign: 'center',
                    color: Colors.black,
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View >
        </BottomPopup>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text
            style={{
              fontFamily: Fonts.PoppinsMedium,
              fontSize: Normalize(18),
              marginLeft: windowWidth * 0.02,
            }}
          >
            Can't find skill ?
          </Text>
        </Pressable>
      </View>
    </Cont>
  );
};

export default AddingSkills;

const styles = StyleSheet.create({
  search: {
    marginTop: 12,
    marginLeft: 26,
  },

  multiSelectContainer: {
    alignSelf: 'center',
    width: windowWidth * 0.8,
  },

  nxt: {
    bottom: windowHeight * -0.88,
  },
});
