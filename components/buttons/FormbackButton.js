import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../Constants/Theme';
import {windowHeight, windowWidth} from '../../utils/Dimension';

const FormbackButton = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 50,
        borderColor: Colors.secondary,
        borderWidth: 3,
        height: windowHeight * 0.07,
        width: windowWidth * 0.14,
        position: 'absolute',
      }}>
      <AntDesign name="arrowleft" size={25} color={Colors.primary} />
    </View>
  );
};

export default FormbackButton;
