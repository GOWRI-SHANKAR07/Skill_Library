import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomPopup = props => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        {props.children}
      </View>
    </Modal>
  );
};

export default BottomPopup;

const styles = StyleSheet.create({});
