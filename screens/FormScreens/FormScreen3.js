import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, ViewBase, Image } from 'react-native';

import {  Container, Content, Detailscont, Dob, Formcont, Formdetails, Formtit, Formtxt, Formtxt2, Imgcont, InnerCont, Line3, Mob, Mobcont, Mobno, Styledtextinput, Styledtextinput2, Text, Verticaleline } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormScreen3 = ({navigation}) => {
    return (
        <Container>
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            <Formcont>
                <Formtit>Add Your Phone Number, Mark</Formtit>
            </Formcont>
            <Formdetails>
                <Formtxt>Enter Phone NUmber : </Formtxt>
                        
                        <Styledtextinput>
                        <Mobno>+91</Mobno>

                            <Mobcont>
                                <Verticaleline />
                                <Mob 
                                    placeholder='Enter your Phone Number'
                                    keyboardType='phone-pad'
                                />
                                <Line3 style={styles.line} />
                            </Mobcont>
                            
                        </Styledtextinput>
                        
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form4')}
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        </Container>

        
    );
}


export default FormScreen3;

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
    },

    line: {
        top: -9,
        width: 240,
        left: 49,
    }
});