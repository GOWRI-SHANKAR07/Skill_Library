import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Container, Content, Detailscont, Formcont, Formdetails, Formtit, Formtxt, Formtxt2, InnerCont, Jobbtn, Jobcont, Jobtxt, Line, Signinbtn, Skipbtn, Skipcont, Skiptxt, Styledcont, Styledtextinput, Styledtextinput2, StyledTxt, StyledTxt2, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen16 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>Almost Done !</Formtit>
            </Formcont>
            
            <Formdetails >
                    <Formtxt2>Organisation Name:</Formtxt2>
                    <Styledtextinput2>
                        <StyledTxt2 
                            placeholder='Enter...'
                        />
                        <Line />
                    </Styledtextinput2>
                    {/* <Text></Text> */}
                    <Formtxt2 style={styles.text}>Job Role:</Formtxt2>
                    <Styledtextinput2 style={styles.txtbox}>
                        <StyledTxt2 
                            placeholder='Enter Role'
                        />
                        <Line />
                    </Styledtextinput2>
                    <Formtxt2 style={styles.align}>Job Type:</Formtxt2>
                    <Jobcont>
                        <Jobbtn>
                            <Jobtxt>Part Time</Jobtxt>
                        </Jobbtn>
                        <Jobbtn>
                            <Jobtxt>Full Time</Jobtxt>
                        </Jobbtn>
                    </Jobcont>
                    <Skipcont>
                        <Skipbtn>
                            <Skiptxt>Skip</Skiptxt>
                        </Skipbtn>
                    </Skipcont>
                    
                
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form3')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
                
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen16;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '21%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    },

    align: {
        top: '23%',
    },

    text: {
        top: 80,
    },

    txtbox: {
        top: '18%'
    },

});