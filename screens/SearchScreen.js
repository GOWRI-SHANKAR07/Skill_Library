import axios from 'axios'
import React, { Component, useEffect, useState, ReactPropTypes } from 'react'
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import MultiSelect from 'react-native-multiple-select'
import { useDispatch, useSelector } from 'react-redux'
import FormbackButton from '../components/buttons/FormbackButton'
import FormNextButton from '../components/buttons/FormNextButton'
import { APIURI } from '../Constants/APIconfigs'
import { ButtonFont2, Colors, Fonts, Normalize } from '../Constants/Theme'
import { setOldUser, setSkill } from '../Redux/actions'
import { Cont, Discriptiontxt, Headercont, Heading } from '../styles/SkillSelect'
import { windowHeight, windowWidth } from '../utils/Dimension'

const items = [{
    id: '92iijs7yta',
    name: 'Logo Designer'
}, {
    id: 'a0s0a8ssbsd',
    name: 'Data Scientist'
}, {
    id: '16hbajsabsd',
    name: 'Machine Learning'
}, {
    id: 'nahs75a5sg',
    name: 'Cloud Architect'
}, {
    id: '667atsas',
    name: 'Editing'
}, {
    id: 'hsyasajs',
    name: 'Colorist'
}, {
    id: 'djsjudksjd',
    name: 'Music'
}, {
    id: 'sdhyaysdj',
    name: 'Dance'
}, {
    id: 'suudydjsjd',
    name: 'Cooking'
}]

const SearchScreen = ({ navigation }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [text, setText] = useState('');

    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItems(selectedItems)
        // console.warn('Selected Items: ', selectedItems)
        axios
            .get(APIURI + '/skillquery/' + text)
            .then(res => setSelectedItems(res.data))
    }

    // state
    const data = useSelector(state => state.skill);
    const details = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const userSkill = details.skill
    // storing in state
    const handleClick = () => {
        console.log(userSkill);
        dispatch(setSkill(selectedItems));
        navigation.navigate('Location');
    };


    return (
        <Cont>
            <View style={{ padding: windowWidth * 0.04 }}>
                <TouchableOpacity >
                    <FormbackButton />
                </TouchableOpacity>
            </View>
            <Headercont>
                <Heading>Select Your Skill !</Heading>
                <Discriptiontxt>Select your top 3 Skills</Discriptiontxt>
            </Headercont>
            <View style={styles.multiSelectContainer}>
                <MultiSelect
                    style={styles.search}
                    items={selectedItems}
                    uniqueKey='id'
                    fixedHeight={true}
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText='Search Your Skill'
                    searchInputPlaceholderText='Search Skills...'
                    onChangeInput={(txt) => setText(txt)}
                    tagRemoveIconColor={Colors.greyBorder}
                    tagBorderColor={Colors.greyBorder}
                    tagTextColor='#000'
                    selectedItemTextColor='#000'
                    selectedItemIconColor='#CCC'
                    itemTextColor='#000'
                    displayKey='name'
                    fontSize={Normalize(16.8)}
                    itemFontFamily={Fonts.PoppinsMedium}
                    searchInputStyle={{ color: '#000', fontFamily: Fonts.PoppinsMedium, }}
                    submitButtonColor={Colors.primary}
                    submitButtonText='Select'
                    fontFamily={Fonts.PoppinsMedium}
                />
                <View
                    style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        marginTop: windowHeight * 0.63,
                        left: windowWidth * 0.67,
                    }}>
                    <TouchableOpacity onPress={() => handleClick()}>
                        <FormNextButton />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{ alignItems: 'center', marginTop: 80 }}>
                <TouchableNativeFeedback 
                    onPress={() => handleClick()}
                >
                    <View
                        style={{
                            elevation: 3,
                            width: 150,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            backgroundColor: Colors.primary,
                            borderRadius: 20,
                        }}>
                        <ButtonFont2 style={{ color: Colors.white }}>SELECT</ButtonFont2>
                    </View>
                </TouchableNativeFeedback>
            </View> */}
        </Cont>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        flexDirection: 'column',
        padding: 22,
    },
    multiSelectContainer: {
        alignSelf: 'center',
        width: windowWidth * 0.8,
    },
    search: {
        fontFamily: Fonts.PoppinsMedium,

    }
})