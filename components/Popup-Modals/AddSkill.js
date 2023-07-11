import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Colors, Fonts, Normalize } from '../../Constants/Theme';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import { FormInputBtn } from '../../styles/Settings';
import ReactNativeModal from 'react-native-modal';
import ToggleButton from '../buttons/ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { APIURI } from '../../Constants/APIconfigs';
import { setUserGender } from '../../Redux/actions';
import { UserBtn, UserBtnTxt } from '../../styles/UserProfile';
import { Discriptiontxt, Skillcont, Skillinp, Skillsearchcont, SkillSelectCont } from '../../styles/SkillSelect';
import { TextInput } from 'react-native-paper';
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';

const Edit = [
    { id: '0', command: 'Edit' },
]

const AddSkill = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isSelected, setIsSelected] = useState('');
    const [gender, updGender] = useState();

    // manual skill input state
    const [skill, setSkill] = useState()
    const [addSkills, setAddSkills] = useState()

    const details = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();

    const HandleSave = (item) => {
        updGender(item)
        dispatch(setUserGender(gender));
        console.log(gender);
    }

    let updateUser = {
        name: details.name,
        username: details.username,
        tagline: details.tagline,
        dob: details.dob,
        gender: details.gender,
        description: details.description,
        role: details.role
    };
    console.log(updateUser);
    axios
        .put(APIURI + 'user/' + updateUser)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });


    const GenderSelect = (item) => {
        setIsSelected(item);
        console.log(isSelected);
    }

    const addSkill = (val) => {
        setSkill(val);
        setAddSkills(skill);
    }

    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
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
                        <Text
                            style={{
                                color: Colors.black,
                                fontFamily: Fonts.PoppinsMedium,
                                fontSize: Normalize(18),
                                marginTop: windowHeight * -0.3,
                                top: windowHeight * 0.12,
                            }}
                        >
                            Enter Your Skill
                        </Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{
                                alignSelf: 'flex-end',
                                marginTop: windowHeight * -0.035,
                                marginRight: windowWidth * 0.09,
                                top: windowHeight * 0.12,
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
                                        top: windowHeight * 0.12,
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
                                        onChange={(val) => setSkill(val)}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setAddSkills(skill)}
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
                                    top: windowHeight * 0.15,
                                }}
                            >
                                <FlatList
                                    style={{
                                        width: windowWidth * 0.7,
                                        height: windowHeight * 0.2,
                                        borderWidth: 2,
                                        borderColor: '#000',
                                    }}
                                    data={addSkills}
                                    // key={item => item.id}
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
                            onPress={() => setModalVisible(false)}
                            style={{
                                width: windowWidth * 0.5,
                                backgroundColor: Colors.secondary,
                                elevation: 3,
                                borderRadius: 25,
                                marginTop: windowHeight * 0.02,
                                top: windowHeight * 0.15,
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
                                marginTop: windowHeight * 0.02,
                                top: windowHeight * 0.15,
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
            </Modal >
            <View
                style={{
                    marginLeft: windowWidth * 0.035,
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                >
                    <Discriptiontxt>Can't find Skill ?</Discriptiontxt>
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default AddSkill;

const styles = StyleSheet.create({
    search: {
        marginTop: 12,
        marginLeft: 26,
    },

    nxt: {
        bottom: windowHeight * -0.88,
    },

    skillSelect: {
        width: windowWidth * 0.99,
        // alignItems: 'center',
    }
});