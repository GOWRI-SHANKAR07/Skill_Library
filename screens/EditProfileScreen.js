import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Animated,
    Modal,
    TextInput,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    FlatList,
    Pressable,
} from 'react-native';
import FormbackButton from '../components/buttons/FormbackButton';
import { Colors, Fonts, Normalize, ProfileNameFont } from '../Constants/Theme';
import Feather from 'react-native-vector-icons/Feather';
import {
    AddSkill,
    AddSkillTxt,
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
import { windowHeight, windowWidth } from '../utils/Dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
import { APIURI } from '../Constants/APIconfigs';
import AddSkillPopup from '../components/Popup-Modals/AddSkill';
import { useDispatch, useSelector } from 'react-redux';
import BottomPopup from '../components/Popup-Modals/BottomPopup';
import { Button } from 'react-native-paper';


const EditProfileScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    // let data = useSelector(state => state.mainReducer.name);
    const dispatch = useDispatch();
    const stateData = useSelector(state => state.mainReducer);
    const userSkills = stateData.skill;

    // retrieving name from state & storing in the userName var
    const userName = stateData.oldUser.hasOwnProperty('user')
        ? stateData.oldUser.user.name
        : '';

    const userID = stateData.oldUser.hasOwnProperty('user')
        ? stateData.oldUser.user.username
        : '';

    const userDescription = stateData.oldUser.hasOwnProperty('user')
        ? stateData.oldUser.user.description
        : '';

    // retrieving tagline from state & storing in the userTagline var
    const userTagline = stateData.oldUser.hasOwnProperty('user')
        ? stateData.oldUser.user.tagline
        : '';

    const userSkill = stateData.oldUser.hasOwnProperty('user')
        ? stateData.oldUser.user.skill
        : '';


    const [user, setUser] = useState();
    const [skill, setSkill] = useState();

    // const id = route.params.id;
    console.log(skill);


    const offSet = useRef(new Animated.Value(0)).current;

    // modal
    const [notVisible, setVisible] = useState(false);

    const visibleHandler = () => {
        setVisible(!notVisible);
    };

    const notVisibleHandler = () => {
        setVisible(false);
    };

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
                {/* <TouchableOpacity
                    style={{
                        marginLeft: windowWidth * 0.8,
                        marginTop: windowHeight * 0.02,
                    }}
                    activeOpacity={1}
                    onPress={() => visibleHandler()}
                    onPressOut={() => setVisible(false)}>
                    <Entypo name="dots-three-vertical" size={25} color={Colors.primary} />
                </TouchableOpacity> */}
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

            <ProfileCont>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <ProfilePic source={require('../assets/images/profile.jpg')} />
                </TouchableOpacity>
                <ProfileNameFont>{userName}</ProfileNameFont>
                <UserId style={styles.id}>{userID}</UserId>
                <UserSkill>{userTagline}</UserSkill>
            </ProfileCont>

            <UserBtnCont>
                <UserBtn
                    // onPress={() => navigation.navigate('ProfileSettings')}
                    onPress={() => console.log(userSkills)}
                    style={{
                        backgroundColor: Colors.primary,
                    }}
                >
                    <UserBtnTxt
                        style={{
                            color: Colors.white,
                        }}
                    >
                        Edit Profile
                    </UserBtnTxt>
                </UserBtn>
            </UserBtnCont>
            <UserDcrpCont>
                <UserDcrptxt>
                    {userDescription}
                </UserDcrptxt>
            </UserDcrpCont>
            <ScrollView
                style={{
                    width: windowWidth * 0.9,
                    marginBottom: windowHeight * 0.1,
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offSet } } }],
                    { useNativeDriver: false },
                )}>
                <SkillTxt>Skills</SkillTxt>
                <AddSkill>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            marginTop: windowHeight * 0.015,
                        }}
                        onPress={() => navigation.navigate('AddingSkills')}
                    >
                        <Entypo
                            name='circle-with-plus'
                            color={Colors.primary}
                            size={45}
                        />
                    </TouchableOpacity>
                    <AddSkillTxt>Add Skill</AddSkillTxt>
                </AddSkill>
                <FlatList
                    style={{ marginTop: 15 }}
                    data={userSkill}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={async () => {
                                await axios
                                    .post(`${APIURI}search`, {
                                        Id: stateData.oldUser.user.id,
                                        skill: query,
                                        long: stateData.oldUser.user.longitude,
                                        lat: stateData.oldUser.user.latitude,
                                    })
                                    .then(res => {
                                        dispatch(setSearchResult(res.data));
                                    })
                                    .catch(e => console.log(e));

                                navigation.navigate('SearchResult', {
                                    text: query,
                                });
                                console.log(query);
                            }}
                            style={{
                                marginBottom: 15,
                                padding: 15,
                                paddingLeft: 25,
                            }}>
                            <Text style={{ color: 'black' }}>
                                <AntDesign
                                    style={styles.iconstyle}
                                    name="search1"
                                    size={18}
                                    color="gray"
                                />    {item.skills}   </Text>
                        </TouchableOpacity>
                    )}
                />

                <FlatList
                    style={{
                        alignSelf: 'center',
                    }}
                    data={userSkills}
                    numColumns={2}
                    renderItem={({ item }) => {
                        console.log(item);
                        return (
                            <View
                                style={{
                                    width: windowWidth * 0.25,
                                    height: windowHeight * 0.11,
                                    marginTop: windowHeight * 0.03,
                                    marginBottom: windowHeight * 0.01,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: Colors.white,
                                    borderRadius: 15,
                                    elevation: 5,
                                    borderWidth: 1,
                                    borderColor: Colors.greyBorder,
                                    marginRight: windowWidth * 0.025,
                                    marginLeft: windowWidth * 0.025,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        marginTop: windowHeight * 0.015,
                                    }}
                                    onPress={() => navigation.navigate('AddingSkills')}
                                >
                                    <Text
                                        style={{
                                            fontFamily: Fonts.PoppinsMedium,
                                            fontSize: Normalize(16),
                                            color: Colors.black,
                                        }}
                                    >
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                />

                <BottomPopup visible={modalVisible}>
                    <View
                        style={{
                            width: '100%',
                            height: '40%',
                            marginTop: 'auto',
                            borderColor: '#ccc',
                            borderWidth: 1,
                            backgroundColor: 'white',
                            elevation: 20,
                            padding: 20,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                style={{
                                    fontFamily: Fonts.PoppinsMedium,
                                    fontSize: 18,
                                    color: Colors.black,
                                }}>
                                Change Profile Photo
                            </Text>
                            <Feather
                                onPress={() => setModalVisible(!modalVisible)}
                                name="x"
                                color={Colors.black}
                                size={30}
                            />
                        </View>

                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 40,
                                padding: 20,
                            }} >
                            <TouchableOpacity onPress={() => {
                                console.log('in func');
                                chooseFile('photo');
                            }}>
                                <Text style={styles.button}>Choose Photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.button}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BottomPopup>
            </ScrollView>
        </Container >
    );
}

export default EditProfileScreen;

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
    button: {
        color: Colors.white,
        backgroundColor: Colors.primary,
        fontFamily: Fonts.PoppinsSemiBold,
        marginBottom: 30,
        padding: 10,
        borderRadius: 25,
        width: '60%',
    }
});
