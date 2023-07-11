import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase, Image } from 'react-native';

import {  Container, Content, Detailscont, Formcont, Formdetails, Formtit, Formtxt, Formtxt2, Img, Imgcont, InnerCont, Line, Searchcont, Searchtxt, Signinbtn, Styledcont, Styledtextinput, StyledTxt, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen14 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>Provide your Location to get connected in your circle</Formtit>
            </Formcont>
            
            <Formdetails>
                    <Formtxt style={styles.align}>Provide Your Location</Formtxt>
                    <Searchcont>
                        <Searchtxt 
                            placeholder='Provide Location'
                        />
                        <AntDesign style={styles.search}  name='search1' size={18} color='#939393' />
                    </Searchcont>
                    <Imgcont>
                        <Img source={require('../../assets/images/bg.png')} />
                    </Imgcont>
                
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form16')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen14;

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

    search: {
        bottom: 33,
        left: '85%',
    },

    align: {
        top: 60,
    }
});