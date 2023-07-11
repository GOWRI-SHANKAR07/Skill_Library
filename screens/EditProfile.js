import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

const SCREEN_HEIGHT = Dimensions.get('window').height ;
const Stack = createNativeStackNavigator();

const UserProfileScreen = ({ navigation }) => {
};

const Popup = ({navigation}) => {
    return(
        <View style={{position: 'absolute',left:0,right:0,bottom:0,top: SCREEN_HEIGHT * 0.8, backgroundColor:'#ffffff'}}>
            { }
            <View style={{}}>
                <TouchableOpacity onPress={() => navigation.goBack() } style={style.popupB}></TouchableOpacity>

            </View>

        </View>

    );
};

const EditProfile = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            cardStyle={{ backgroundColor: 'transparent'}}
            screenOptions= {{headerShown:false}} >
             <Stack.Screen name={'UserProfileScreen'} component={UserProfileScreen}/>
             <Stack.Screen name={'Popup'} component={Popup} options={{ cardStyle:{backgroundColor:'transparent'},  presentation:'modal' , gestureResponseDistance : SCREEN_HEIGHT * 0.9,gestureVelocityImpact: 0.5}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

};
export default EditProfile ;