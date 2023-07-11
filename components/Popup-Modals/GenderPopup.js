import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Colors, Fonts, Normalize } from '../../Constants/Theme';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import { FormInputBtn } from '../../styles/Settings';
import ReactNativeModal from 'react-native-modal';
import ToggleButton from '../buttons/ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { APIURI } from '../../Constants/APIconfigs';
import { setUserGender } from '../../Redux/actions';

const Gender = [
    { id: '0', gender: 'Male' },
    { id: '1', gender: 'Female' },
    { id: '2', gender: 'Other' },
]

const GenderPopup = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isSelected, setIsSelected] = useState('');
    const [gender, updGender] = useState();

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
                        height: windowHeight * 0.5,
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
                        elevation: 20
                    }}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
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
                        data={Gender}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity
                                    onPress={() => GenderSelect(item.id)}
                                    style={
                                        isSelected == item.id
                                            ? {
                                                width: windowWidth * 0.5,
                                                borderRadius: 5,
                                                backgroundColor: Colors.primary,
                                                color: Colors.white,
                                                padding: 10,
                                                borderColor: Colors.black,
                                                elevation: 3,
                                                color: Colors.black,
                                                padding: 10,
                                                margin: 9,
                                                borderRadius: 15,
                                            }
                                            : {
                                                width: windowWidth * 0.5,
                                                backgroundColor: Colors.white,
                                                elevation: 3,
                                                borderRadius: 17,
                                                marginTop: windowHeight * 0.02,
                                                paddingLeft: windowWidth * 0.05,
                                                fontFamily: Fonts.PoppinsLight,
                                                padding: windowWidth * 0.02,
                                                fontSize: Normalize(18),
                                                borderWidth: 0.5,
                                                borderColor: Colors.greyBorder,
                                            }
                                    }>
                                    <Text
                                        style={
                                            isSelected == item.id
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
                    <View
                        style={{
                            flexDirection: 'row',
                            margin: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => HandleSave(isSelected)}
                            style={{
                                width: windowWidth * 0.3,
                                backgroundColor: Colors.primary,
                                elevation: 3,
                                borderRadius: 17,
                                marginTop: windowHeight * 0.02,
                                color: Colors.black,
                                fontFamily: Fonts.PoppinsLight,
                                padding: windowWidth * 0.02,
                                fontSize: Normalize(18),
                                borderWidth: 0.5,
                                borderColor: Colors.greyBorder,
                                margin: windowWidth * 0.03,
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
                                width: windowWidth * 0.3,
                                backgroundColor: Colors.primary,
                                elevation: 3,
                                borderRadius: 17,
                                marginTop: windowHeight * 0.02,
                                color: Colors.black,
                                fontFamily: Fonts.PoppinsLight,
                                padding: windowWidth * 0.02,
                                fontSize: Normalize(18),
                                borderWidth: 0.5,
                                borderColor: Colors.greyBorder,
                                margin: windowWidth * 0.03,
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
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </Modal >
        <FormInputBtn
            onPress={() => setModalVisible(true)}
        >
            <Text
                style={{
                    color: Colors.greyplaceholder,
                    fontFamily: Fonts.PoppinsLight,
                    fontSize: Normalize(17),
                }}
            >Select Your Gender</Text>
        </FormInputBtn>
    </View >
);
}

export default GenderPopup;