import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Colors } from "../../Constants/Theme";
import { windowHeight, windowWidth } from "../../utils/Dimension";
import SelectDropdown from "react-native-select-dropdown";
import { Fonts, Normalize } from "../../Constants/Theme";
import { FormInputBtn } from "../../styles/Settings";

const ModalTester = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const Gender = ['Male', 'Female', 'Others'];


    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <FormInputBtn 
                onPress={toggleModal}
            >
                <Text
                    style={{
                        fontFamily: Fonts.PoppinsMedium,
                        fontSize: Normalize(18),
                    }}
                >
                    Select your Gender
                </Text>
            </FormInputBtn>

            <Modal isVisible={isModalVisible}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: Colors.white,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: windowWidth * 0.8,
                        coverScreen: true,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: windowWidth * 0.5,
                            backgroundColor: Colors.white,
                            elevation: 3,
                            borderRadius: 17,
                            marginTop: windowHeight * 0.02,
                            paddingLeft: windowWidth * 0.05,
                            color: Colors.black,
                            fontFamily: Fonts.PoppinsLight,
                            padding: windowWidth * 0.02,
                            fontSize: Normalize(18),
                            borderWidth: 0.5,
                            borderColor: Colors.greyBorder,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: Fonts.PoppinsMedium,
                                fontSize: Normalize(18),
                                textAlign: 'center',
                            }}
                        >
                            Male
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: windowWidth * 0.5,
                            backgroundColor: Colors.white,
                            elevation: 3,
                            borderRadius: 17,
                            marginTop: windowHeight * 0.02,
                            paddingLeft: windowWidth * 0.05,
                            color: Colors.black,
                            fontFamily: Fonts.PoppinsLight,
                            padding: windowWidth * 0.02,
                            fontSize: Normalize(18),
                            borderWidth: 0.5,
                            borderColor: Colors.greyBorder,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: Fonts.PoppinsMedium,
                                fontSize: Normalize(18),
                                textAlign: 'center',
                            }}
                        >
                            Female
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: windowWidth * 0.5,
                            backgroundColor: Colors.white,
                            elevation: 3,
                            borderRadius: 17,
                            marginTop: windowHeight * 0.02,
                            paddingLeft: windowWidth * 0.05,
                            color: Colors.black,
                            fontFamily: Fonts.PoppinsLight,
                            padding: windowWidth * 0.02,
                            fontSize: Normalize(18),
                            borderWidth: 0.5,
                            borderColor: Colors.greyBorder,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: Fonts.PoppinsMedium,
                                fontSize: Normalize(18),
                                textAlign: 'center',
                            }}
                        >
                            Other
                        </Text>
                    </TouchableOpacity>
                    {/* <SelectDropdown
                        data={Gender}
                        onSelect={(selectedGender, index) => {
                            updGender(selectedGender);
                        }}
                        buttonTextAfterSelection={(selectedGender, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedGender
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                        dropdownStyle={{
                            height: windowHeight * 0.21,
                            backgroundColor: Colors.white,
                            backgroundColor: Colors.white,
                            elevation: 3,
                            borderRadius: 17,
                            marginTop: windowHeight * 0.01,
                            color: Colors.black,
                            fontFamily: Fonts.PoppinsMedium,
                            padding: windowWidth * 0.02,
                            fontSize: Normalize(18),
                        }}
                        buttonStyle={{
                            width: windowWidth * 0.75,
                            backgroundColor: Colors.white,
                            elevation: 3,
                            borderRadius: 17,
                            marginTop: windowHeight * 0.02,
                            paddingLeft: windowWidth * 0.05,
                            color: Colors.black,
                            fontFamily: Fonts.PoppinsLight,
                            padding: windowWidth * 0.02,
                            fontSize: Normalize(18),
                            borderWidth: 0.5,
                            borderColor: Colors.greyBorder,
                        }}
                        buttonTextStyle={{
                            fontFamily: Fonts.PoppinsMedium,
                            fontSize: Normalize(18),
                            textAlign: 'left',
                            marginLeft: windowWidth * 0.04,
                        }}
                    /> */}
                    <View
                        style={{
                            flexDirection: 'row',
                            margin: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={toggleModal}
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
                            onPress={toggleModal}
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
            </Modal>
        </View>
    );
}

export default ModalTester;