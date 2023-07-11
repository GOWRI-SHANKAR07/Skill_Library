import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Chargesbtn, Chargesbtncont, Chargesbtntxt, Chargescont, Chargestxt, Container, Content, Detailscont, Distbtn, Distcont, Formcont, Formdetails, Formtit, Formtxt, Formtxt2, Img, Imgcont, InnerCont, Line, Signinbtn, Styledcont, Styledtextinput, StyledTxt, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen11 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>How many KM are you able to travel ?</Formtit>
            </Formcont>
            
            <Formdetails>
                    <Distcont>
                        <Distbtn>
                            <Chargestxt style={styles.disttxt}>5KM</Chargestxt>
                        </Distbtn>
                        <Text>  </Text>
                        <Distbtn>
                            <Chargestxt style={styles.disttxt}>10KM</Chargestxt>
                        </Distbtn>
                    </Distcont>
                    <Chargesbtncont style={styles.box}>
                            <Chargesbtntxt style={styles.boxtxt}>Enter</Chargesbtntxt>
                    </Chargesbtncont>
                    
                    <Imgcont>
                        <Img source={require('../../assets/images/photo-2.png')} />
                    </Imgcont>
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form12')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen11;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '43%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    },

    box: {
        width: 113,
        height: 49,
        left: 265,
        top: 70,
    },

    boxtxt: {
        width: 39,
        height: 22,
        fontWeight: 'bold',
    },

    disttxt: {
        top: 32,
        left: 22,
    }
});