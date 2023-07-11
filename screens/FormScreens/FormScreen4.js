import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Avatarcont, Container, Content, Detailscont, Formcont, Formdetails, Formtit, Formtxt, InnerCont, Text, Uploadbtn, Uploadcont } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen4 = ({navigation}) => {
    return (
        <Container>
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            <Formcont>
                <Formtit>Little More to go !</Formtit>
            </Formcont>
            <Formdetails>
                <Avatarcont>

                </Avatarcont>
                <Uploadcont>
                    <Uploadbtn>Upload Profile</Uploadbtn>
                </Uploadcont>
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form5')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        </Container>

        
    );
}


export default FormScreen4;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '39%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    }
});