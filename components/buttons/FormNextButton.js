import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../Constants/Theme';
import { windowHeight, windowWidth } from '../../utils/Dimension';
const FormNextButton = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        color: '#fff',
        borderRadius: 50,
        width: windowWidth * 0.2,
        height: windowHeight * 0.1,
        bottom: windowHeight * 0.01,
        right: windowWidth * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('Names')}>
      <AntDesign name="arrowright" size={50} color="#fff" />
    </View>
  );
};

export default FormNextButton;
