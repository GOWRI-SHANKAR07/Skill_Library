import React, { useEffect, useRef, useState } from 'react';
import { Animated, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormbackButton from '../components/buttons/FormbackButton';
import { AddSkill, AddSkillTxt, Container, HeaderCont, ProfileCont, ProfilePic, SkillCont, SkillImg, SkillTxt, UserBtn, UserBtnCont, UserBtnTxt, UserDcrpCont, UserDcrptxt, UserId, UserSkill } from '../styles/UserProfile';
import { windowHeight, windowWidth } from '../utils/Dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Fonts, ProfileNameFont } from '../Constants/Theme';
import axios from 'axios';
import { APIURI } from '../Constants/APIconfigs';
import { Skill } from '../styles/Profile';

const Profile = ({ route, navigation }) => {
    const [isActive, setIsActive] = useState(false);
    const [user, setUser] = useState();

    const handleClick = () => {
        // toggle
        setIsActive(current => !current);
    };

    // const id = route.params.id;
    // console.log(id);

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
            .get(APIURI + 'user/')
            .then(res => {
                setUser(res.data);
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
                    onPressOut={() => setVisible(false)}
                >
                    <Entypo name="dots-three-vertical" size={25} color={Colors.primary} />
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
                    [{ nativeEvent: { contentOffset: { y: offSet } } }],
                    { useNativeDriver: false },
                )}
            >
                <ProfileCont>
                    <ProfilePic source={require('../assets/images/profile.jpg')} />
                    <ProfileNameFont>{user ? user.name : ' '}</ProfileNameFont>
                    <UserId style={styles.id}>{user ? user.username : ' '}</UserId>
                    <UserSkill>{user ? user.Tagline : ' '}</UserSkill>
                </ProfileCont>
                <UserBtnCont>
                    <UserBtn
                        style={
                            isActive == true ?
                                {
                                    backgroundColor: Colors.primary,
                                } :
                                {
                                    backgroundColor: Colors.white,
                                }
                        }
                        onPress={handleClick}>
                        <UserBtnTxt
                            style={
                                isActive == true ?
                                    {
                                        color: Colors.white,
                                    } :
                                    {
                                        color: Colors.black,
                                    }
                            }
                        >
                            Edit Profile
                        </UserBtnTxt>
                    </UserBtn>
                </UserBtnCont>
                <UserDcrpCont>
                    <UserDcrptxt>
                        {user
                            ? user.Work_Description
                            : 'No Description'}
                    </UserDcrptxt>
                </UserDcrpCont>
                <SkillTxt>Skills</SkillTxt>
                <SkillCont>
                    <AddSkill>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                marginTop: windowHeight * 0.03
                            }}
                        >
                            <Entypo
                                name='circle-with-plus'
                                color={Colors.primary}
                                size={80}
                            />
                        </TouchableOpacity>
                        <AddSkillTxt>Add Skill</AddSkillTxt>
                    </AddSkill>
                    <SkillImg source={require('../assets/images/logodesigner.png')} />
                    <SkillImg source={require('../assets/images/illustrator.jpg')} />
                    <SkillImg source={require('../assets/images/react-native.png')} />
                    <SkillImg source={require('../assets/images/node.png')} />
                    <SkillImg source={require('../assets/images/mongodb.png')} />
                    <SkillImg source={require('../assets/images/python.jpg')} />
                </SkillCont>
            </ScrollView>
        </Container>
    );
};

export default Profile;

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
