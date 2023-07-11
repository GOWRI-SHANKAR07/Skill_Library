import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Container, Content, Detailscont, Formcont, Formdetails, Formtit, Formtxt, InnerCont, Line, Signinbtn, Styledcont, Styledtextinput, StyledTxt, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen7 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>Add Tagline for your account</Formtit>
            </Formcont>
            
            <Formdetails>
                    <Formtxt>Enter a tagline for your account</Formtxt>
                    <Styledtextinput>
                        <StyledTxt 
                            placeholder='Graphics Designer'
                        />
                        <Line />
                    </Styledtextinput>
                
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form8')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen7;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '65%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    }
});