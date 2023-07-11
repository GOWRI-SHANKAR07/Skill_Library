import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Container, Content, Detailscont, Formcont, Formdetails, Formtit, Formtxt, InnerCont, Line, Searchtxt, Signinbtn, Skillbtn, Skillcont, Skillinp, Skillsearch, Skillsearchcont, Skillsearchinp, Skilltxt, Styledcont, Styledtextinput, StyledTxt, Text, Textfield } from '../../styles/Base-Component';
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen5 = ({navigation}) => {
    return (
        <Container>
            
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            
            <Formcont>
                <Formtit>What's Your Skill ?</Formtit>
                <Skillsearchcont>
                    <AntDesign 
                        style={styles.search}  
                        name='search1' 
                        size={20} 
                        color='#00A8E8' 
                    />
                    <Skillinp 
                        placeholder='Search...'
                    />
                </Skillsearchcont>
            </Formcont>
            
            <Formdetails>
                <Skillcont>
                    <Skillbtn>
                        <Skilltxt>Art</Skilltxt>
                    </Skillbtn>
                    <Skillbtn>
                        <Skilltxt>Plumber</Skilltxt>
                    </Skillbtn>
                </Skillcont>
                <Skillcont>
                    <Skillbtn>
                        <Skilltxt>Painter</Skilltxt>
                    </Skillbtn>
                    <Skillbtn>
                        <Skilltxt>Web dev</Skilltxt>
                    </Skillbtn>
                </Skillcont> 
                <Skillcont>
                    <Skillbtn>
                        <Skilltxt>Electrician</Skilltxt>
                    </Skillbtn>
                    <Skillbtn>
                        <Skilltxt>After Effects</Skilltxt>
                    </Skillbtn>
                </Skillcont>  
                
                <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form7')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
            </Formdetails>
        
        </Container>

    );
}


export default FormScreen5;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        top: '42%',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    },

    search: {
        marginTop: 10,
        marginLeft: 26,
    },
});