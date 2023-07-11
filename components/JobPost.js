import {View, Text} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../Constants/Theme';

const JobPostComponent = (props, {item}) => {
  console.log(props.item.item);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        margin: 10,
        elevation: 5,
        borderRadius: 20,
        padding: 10,
        width: '90%',
      }}>
      <View>
        <Text
          style={{
            marginLeft: 3,
            padding: 5,
            fontFamily: Fonts.PoppinsBold,
            color: Colors.black,
            fontSize: 13,
          }}>
          {props.item.item.Title}
        </Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.secondary,
            height: 30,
            width: 30,
            borderRadius: 30,
          }}></View>
        <Text
          style={{
            marginLeft: 5,
            flexGrow: 1,
            fontFamily: Fonts.PoppinsSemiBold,
            fontSize: 12,
            color: Colors.black,
          }}>
          {props.item.item.name}
        </Text>
        <Text style={{fontSize: 10, fontFamily: Fonts.PoppinsMedium}}>
          {props.item.item.time}
        </Text>
      </View>
      <View>
        <Text style={{fontFamily: Fonts.PoppinsMedium, fontSize: 11}}>
          {props.item.item.Description}
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            marginVertical: 8,
            backgroundColor: Colors.primary,
            width: '40%',
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: Colors.white}}>Apply</Text>
        </View>
      </View>
    </View>
  );
};

export default JobPostComponent;
