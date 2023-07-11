import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Chargesbtn, Chargesbtncont, Chargesbtntxt, Chargescont, Chargestxt, Container, Content, Detailscont, Formcont, Formdetails, Formtit, Formtxt, Formtxt2, Img, Imgcont, InnerCont, Line, Signinbtn, Styledcont, Styledtextinput, StyledTxt, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen12 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>Add Your Charge       Details</Formtit>
            </Formcont>
            
            <Formdetails>
                    <Formtxt2>Your Charges per Hour ?</Formtxt2>
                    <Chargescont>
                        <Chargestxt>Minimum</Chargestxt>
                        <Chargesbtncont>
                            <Chargesbtntxt>500</Chargesbtntxt>
                        </Chargesbtncont>
                    </Chargescont>
                    <Text></Text>
                    <Chargescont>
                        <Chargestxt>Maximum</Chargestxt>
                        <Chargesbtncont>
                            <Chargesbtntxt>1000</Chargesbtntxt>
                        </Chargesbtncont>
                    </Chargescont>
                    
                    <Imgcont>
                        <Img source={require('../../assets/images/photo-1.png')} />
                    </Imgcont>
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form14')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen12;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '63%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    }
});