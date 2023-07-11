import React from 'react';
import { StatusBar, StyleSheet,Button, Text ,TextInput, TouchableOpacity, View, ViewBase } from 'react-native';

import {  Container, Heading,Searchcont,Searchtxt,Uploadcont,Uploadbtn, Imgcont,Img} from '../../styles/Base-Component';
import AntDesign from 'react-native-vector-icons/AntDesign';
const FormScreen17 = ({navigation}) => { 
    return (
<View>
<Text style={styles.head}>GetConnected by skill!</Text>

    <Searchcont>
        <Searchtxt placeholder='Your Current Location'/>
            <AntDesign style={styles.search}  name='search1' size={18} color=' #00A8E8' />
    </Searchcont>
   
                
        <Container>
        <TouchableOpacity 
                    style={styles.cont}
                    onPress={() => navigation.navigate('Form2')}    
                >
                    <AntDesign style={styles.arrow} name='arrowright' size={50} color='#fff' />
                </TouchableOpacity>
    </Container>
    
    </View>
);


}
export default FormScreen17;

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#00A8E8',
        color: '#fff',
        borderRadius: 50,
        width: 82,
        height: 82,
        alignContent: 'center',
        justifyContent: 'center',
        left: '70%',
    },

    arrow: {
        textAlign: 'center'
    },
    search: {
        bottom: 33,
        left: '3%',
    },
     head:{
         fontSize:50  ,
         color: '#00A8E8' ,
        left: '6.04%',
        right: '21.74%',
        top: '25%',
        bottom: '64.29%',
        fontSize : 32 ,
        height: 96 ,
        width: 299 ,
        fontFamily: 'poppins',




     }
})