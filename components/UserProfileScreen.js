import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.name}>
        <View>
          <Avatar.Image
            source={{
              uri: 'https://reactjs.org/logo-og.png',
            }}
            style={{height: 100, width: 100, size: 50}}
            imagestyle={{borderRadius: 50}}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              Harish
            </Title>
            <Caption style={styles.caption}> Garaphic Deisgner </Caption>
            <TouchableOpacity>
              <View style={styles.button1}>
                <Text style={styles.buttontext1}> Message </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.button2}>
                <Text style={styles.buttontext2}> View Profile </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.name}>
        <View style={styles.row}>
          <Text>Description designer and etc</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-center',
    alignItems: 'center',
  },
  name: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    alignItems: 'center',
  },
  row: {
    fontSize: 16,
    color: '#717070',
  },
  button1: {
    height: "6%",
    width:"30%",
    justifyContent: 'center',
    alignItem: 'center',
    borderRadius: 10,
    backgroundColor: '#00A8E8',
  },
  buttontext1: {
    color: '#fff',
    fontSize: 16,
  },
  button2: {
    height: "6%",
    width:"30%",
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#00A8E8',
  },
  buttontext2: {
    color: '#00A8E8',
    fontSize: 16,
  },
});
