import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Container, Content, Descont, Destxt, Destxt1, Destxt2, Detailscont, Expbox, Expbox1, Expbox2, Expcont, Exptxt1, Exptxt2, Formcont, Formdetails, Formtit, Formtxt, Formtxt2, InnerCont, Line, Signinbtn, Styledcont, Styledtextinput, Styledtextinput2, StyledTxt, StyledTxt2, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen8 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>Your experience ?</Formtit>
            </Formcont>
            
            <Formdetails>
                    <Formtxt2 style={styles.align}>experience level:</Formtxt2>
                    <Styledtextinput2 style={styles.alignbox}>
                        <StyledTxt2
                            style={styles.txt} 
                            placeholder= 'Select'
                        />
                    </Styledtextinput2>
                    <Formtxt2 style={styles.text}>How many years of experience:</Formtxt2>
                    <Expcont>
                        <Expbox1>
                            <Exptxt1 
                                placeholder='Enter'
                            />
                        </Expbox1>
                        <Expbox2>
                            <Exptxt2 
                                placeholder='Enter'
                            />
                        </Expbox2>
                    </Expcont>
                    <Descont>
                        <Destxt1>Months</Destxt1>
                        <Destxt2>Year</Destxt2>
                    </Descont>
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form9')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen8;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '22%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    },

    text: {
        top: 130,
    },

    align: {
        top: 50,
    },

    alignbox: {
        top: 80,
    },

    txt: {
        marginTop: 2,
    } 
});