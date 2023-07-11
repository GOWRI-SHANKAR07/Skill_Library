import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Container, Content, Descriptioncont, Descriptiontxt, Detailscont, Formcont, Formdetails, Formtit, Formtxt, Formtxt2, InnerCont, Line, Modecont, Modeimg, Modetxt, Signinbtn, Styledcont, Styledtextinput, StyledTxt, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation'

const FormScreen10 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>Add Details about Your Work</Formtit>
            </Formcont>
            
            <Formdetails>
                <Formtxt2>Description about ur work:</Formtxt2>
                <TouchableOpacity>
                    <Foundation 
                        name='info' 
                        size={25} 
                        color='#000' 
                        style={styles.ibtn}    
                    />
                </TouchableOpacity>
                <Descriptioncont>
                    <Descriptiontxt 
                        placeholder= 'Im passanate about cyber security and Im Contributing to the Web Application security...'
                        multiline={true}
                    />
                </Descriptioncont>
                <Formtxt2>Your work Based on ?</Formtxt2>
                <Modecont>
                    <Modeimg 
                        source={require('../../assets/images/online.png')}
                    />
                    <Modetxt>Online</Modetxt>
                </Modecont>
                <Modecont>
                    <Modeimg 
                        source={require('../../assets/images/offline.png')}
                    />
                    <Modetxt>Offline</Modetxt>
                </Modecont>
                <Modecont>
                    <Modeimg 
                        source={require('../../assets/images/both.png')}
                    />
                    <Modetxt>Both</Modetxt>
                </Modecont>
                
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form11')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen10;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '3%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    },

    ibtn: {
        marginTop: 7,
        marginLeft: 320,
    }

});