import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, ViewBase, useState } from 'react-native';

import {  Container, Content, Detailscont, Formcont, Formdetails, Formtit, Formtxt, InnerCont, Text, Styledtextinput, StyledTxt, Line, Styledtextinput2,StyledTxt2, Dob, Line3, Formtxt2, Gendercont, Genderbtn, Genderimg, Genderhead, Prefercont, Prefertxt } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';

import Foundation from 'react-native-vector-icons/Foundation';

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';


const FormScreen1 = ({navigation}) => {
   
    return (
        <Container>
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            <Formcont>
                <Formtit>Little information to get started 🎉</Formtit>
            </Formcont>
            <Formdetails>
                <Formtxt2>What's Your Name ?</Formtxt2>
                    <Styledtextinput2>
                        <StyledTxt2 
                            placeholder='Enter your Name'
                        />
                        <Line />
                    </Styledtextinput2>
                <Formtxt2 style={styles.text}>Date of Birth : </Formtxt2>
                    <Styledtextinput2 style={styles.txtbox}>
                        <Foundation style={styles.calendar} name='calendar' size={35} color='#000' />
                        <Dob 
                            placeholder='DD/MM/YYY'
                            keyboardType='numeric'
                        />
                        <Line3 />
                    </Styledtextinput2>
                    <Formtxt2 style={styles.align}>Choose Your Gender :</Formtxt2>
                    <Gendercont>
                        <Genderbtn>  
                            <Genderimg source={require('../../assets/images/male.png')} />  
                            <Genderhead source={require('../../assets/images/male-head.png')} />  
                        </Genderbtn>
                        <Genderbtn>  
                            <Genderimg style={styles.femaleface} source={require('../../assets/images/male.png')} />  
                            <Genderhead style={styles.female} source={require('../../assets/images/female-head.png')} />    
                        </Genderbtn>
                        <Genderbtn>   
                            <Genderimg source={require('../../assets/images/others.png')} />   
                        </Genderbtn>
                    </Gendercont>
                    <Prefercont>
                        <Prefertxt>Prefer not to say</Prefertxt>
                    </Prefercont>
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form2')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
            
        </Container>
        
        
    );
}


export default FormScreen1;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    },

    calendar: {
        marginTop: 8,
        marginLeft: 24,
    },

    align: {
        top: '22%',
    },

    femaleface: {
        width: 38,
        height: 40,
        top: 27,
        left: 23
    } ,

    female: {
        width: 41, 
        height: 47
    },

    text: {
        top: 80,
    },

    txtbox: {
        top: '18%'
    },
});