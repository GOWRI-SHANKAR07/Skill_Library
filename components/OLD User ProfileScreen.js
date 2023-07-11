import React from "react";
import{StyleSheet , Text, SafeAreaView, View, TouchableOpacity, Botton} from "react-native";
import{Avatar, Title,Caption,TouchableRipple} from 'react-native-paper';

const  UserProfileScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.name}>
                <View>
                    <Avatar.Image
                    source={{
                        uri:'https://reactjs.org/logo-og.png',
                    }}
                    style={{height:100, width:100, size:50,}}
                    imagestyle={{borderRadius:50}}
                    />
                <View style={{marginLeft:20}}>
                <Title style={[styles.title, {
                marginTop:15,
                marginBottom:5,}]}>Harish</Title>
                <Caption style={styles.caption}>Garaphic Deisgner</Caption>
                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}> Message</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.buttonContainer1}>
                        <Text style={styles.buttonText1}> View Profile </Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        </View>

        <View> style ={styles.name}>
        <View style={styles.row}>
            <Text>Description designer and etc</Text>
            </View>
        </View>
    </SafeAreaView>

    );
};

export default  UserProfileScreen;
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgorundColor:"white",
        flexDirection:'row',
        justifyContent:'space-center',
        alignItems:'center',
    },
    name:{
        paddingHorizontal:30,
        marginBottom:25,
    },
    title:{
        fontSize:24,
        fontWeight:'Bold',
        alignItems:'center',
        
    },
    row:{
        fontSize:16,
        color: '#717070',
    },
    buttonContainer:{
        marginVertical:20,
        height:40,
        marginHorizontal:10,
        justifyContent:'center',
        alignItem:'center',
        borderRadius: 3,
        borderColor:'#00A8E8',
    },
    butttonText:{
        textTransform:'uppercase',
        color:'#fff',
        fontSize: 16,
        fontWeight:'bold',
    },
    buttonContainer1:{
        marginVertical:20,
        height:40,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        borderColor:'#00A8E8',
    },
    buttonText1:{
        textTransform:'uppercase',
        color:'#00A8E8',
        fontSize:16,
    }

});
