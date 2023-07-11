import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import FormbackButton from '../components/buttons/FormbackButton';
import {Colors, Fonts, ProfileNameFont} from '../Constants/Theme';
import {
  Container,
  HeaderCont,
  ProfileCont,
  ProfilePic,
  SkillCont,
  SkillImg,
  SkillTxt,
  UserBtn,
  UserBtnCont,
  UserBtnTxt,
  UserDcrpCont,
  UserDcrptxt,
  UserId,
  UserName,
  UserSkill,
} from '../styles/UserProfile';
import {windowHeight, windowWidth} from '../utils/Dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// menupopup
import {
  MenuProvider,
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import axios from 'axios';
import {APIURI} from '../Constants/APIconfigs';

const UserProfileScreen = ({navigation, route}) => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const [user, setUser] = useState();
  const [skill, setSkill] = useState();

  const id = route.params.id;
  console.log(skill);

  const handleClick1 = () => {
    // toggle
    setIsActive1(current => !current);
  };

  const handleClick2 = () => {
    // toggle
    setIsActive2(current => !current);
  };

  const offSet = useRef(new Animated.Value(0)).current;

  // modal
  const [notVisible, setVisible] = useState(false);

  const visibleHandler = () => {
    setVisible(!notVisible);
  };

  const notVisibleHandler = () => {
    setVisible(false);
  };

  useEffect(() => {
    axios
      .get(APIURI + 'user/' + id)
      .then(res => {
        setUser(res.data.user);
        setSkill(res.data.skills);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <Container>
      <HeaderCont>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginRight: windowWidth * 0.9,
            marginTop: windowHeight * 0.02,
          }}>
          <FormbackButton />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: windowWidth * 0.8,
            marginTop: windowHeight * 0.02,
          }}
          activeOpacity={1}
          onPress={() => visibleHandler()}
          onPressOut={() => setVisible(false)}>
          {/* <TouchableWithoutFeedback> */}
          <Entypo name="dots-three-vertical" size={25} color={Colors.primary} />
          {/* </TouchableWithoutFeedback> */}
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={notVisible}
          onRequestClose={() => setVisible(false)}>
          <View style={styles.modal}>
            <View style={styles.menu}>
              <TouchableOpacity>
                <Text style={styles.text}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.text}>Report</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => notVisibleHandler()}>
                <Text style={styles.closeTxt}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </HeaderCont>
      <Text></Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offSet}}}],
          {useNativeDriver: false},
        )}>
        <ProfileCont>
          <ProfilePic source={require('../assets/images/profile.jpg')} />
          <ProfileNameFont>{user ? user.name : ' '}</ProfileNameFont>
          <UserId style={styles.id}>{user ? user.username : ' '}</UserId>
          <UserSkill>{user ? user.Tagline : ' '}</UserSkill>
        </ProfileCont>
        <UserBtnCont>
          <UserBtn
            style={{
              backgroundColor: Colors.primary,
            }}
            onPress={handleClick1}>
            <UserBtnTxt style={{color: Colors.white}}>Message</UserBtnTxt>
          </UserBtn>
          <UserBtn
            style={{
              backgroundColor: Colors.white,
            }}
            onPress={handleClick2}>
            <UserBtnTxt style={{color: Colors.black}}>Call</UserBtnTxt>
          </UserBtn>
        </UserBtnCont>
        <UserDcrpCont>
          <UserDcrptxt>
            {user
              ? user.Work_Description
              : `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,pretium.`}
          </UserDcrptxt>
        </UserDcrpCont>
        <SkillTxt>Skills</SkillTxt>
        {/* <SkillCont>
          <SkillImg source={require('../assets/images/logodesigner.png')} />
          <SkillImg source={require('../assets/images/illustrator.jpg')} />
          <SkillImg source={require('../assets/images/react-native.png')} />
          <SkillImg source={require('../assets/images/node.png')} />
          <SkillImg source={require('../assets/images/mongodb.png')} />
          <SkillImg source={require('../assets/images/python.jpg')} />
        </SkillCont> */}
      </ScrollView>
      <FlatList
        data={skill}
        numColumns={2}
        renderItem={({item}) => {
          console.log(item);
          return (
            <View
              style={{
                backgroundColor: Colors.secondary,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
                width: 100,
                borderRadius: 10,
                margin: 5,
                marginRight: 15,
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: Fonts.PoppinsMedium,
                  }}>
                  {item.skills}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

const PopUp = () => {
  return (
    <MenuProvider style={styles.menu}>
      <Menu style={styles.popup}>
        <MenuTrigger text=""></MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Save`)} text="Share" />
          <MenuOption onSelect={() => alert(`Delete`)} text="Report" />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  id: {
    marginTop: windowHeight * -0.01,
    marginBottom: windowHeight * 0.01,
  },
  modal: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.14,
    backgroundColor: '#fff',
    // borderWidth: 2,
    // borderColor: '#000',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: windowHeight * 0.08,
    marginLeft: windowWidth * 0.55,
    elevation: 20,
  },
  menu: {
    padding: 10,
  },
  text: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: Colors.black,
    padding: 5,
  },
  closeTxt: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: 'red',
    padding: 5,
  },
});
