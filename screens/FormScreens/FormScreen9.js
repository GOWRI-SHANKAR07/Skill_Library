import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Container, Content, Designationcont, Designationimg, Designationtxt, Detailscont, Formcont, Formdetails, Formtit, Formtxt, Formtxt2, InnerCont, Line, Signinbtn, Styledcont, Styledtextinput, StyledTxt, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen9 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>Little more!</Formtit>
            </Formcont>
            
            <Formdetails>
                <Formtxt2>What are You Doing :</Formtxt2>
                <Designationcont>
                    <Designationimg 
                        source={require('../../assets/images/student.png')}
                    />
                    <Designationtxt>Student</Designationtxt>
                </Designationcont>
                <Designationcont style={styles.btncont1}>
                    <Designationimg 
                        source={require('../../assets/images/working.png')}
                    />
                    <Designationtxt>Working</Designationtxt>
                </Designationcont>
                <Designationcont style={styles.btncont2}>
                    <Designationimg 
                        source={require('../../assets/images/freelancer.png')}
                    />
                    <Designationtxt>Freelancer</Designationtxt>  
                </Designationcont>
                
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form10')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen9;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '75%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    },

    btncont1: {
        marginTop: 220,
    },

    btncont2: {
        marginTop: 340,
    }
});