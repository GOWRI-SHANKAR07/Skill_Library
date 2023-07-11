import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  MessageTobBar,
  PageTitle,
  ProfileContainer,
  TextContent,
  ProfileName,
} from '../styles/Message';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import {inboxParticipants, openChat} from '../Redux/store';
import {Colors, Fonts} from '../Constants/Theme';
import TimeAgo from 'react-native-timeago';
const MessageContainer = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <ProfileContainer>
      <View
        style={{
          height: 46,
          width: 46,
          backgroundColor: '#a2d2ff',
          borderRadius: 50,
        }}>
        <Image
          style={{
            height: 46,
            width: 46,
            // backgroundColor: '#a2d2ff',
            borderRadius: 50,
          }}
          source={require('../assets/images/bg.png')}
        />
      </View>
      <View
        style={{
          flexGrow: 1,
          marginHorizontal: 10,
          justifyContent: 'center',
        }}>
        <ProfileName>{item.name}</ProfileName>
        <TextContent>{item.last_msg}</TextContent>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <TimeAgo time={item.updatedAt} />

        <NewMessageIndicator seen={item.seen}></NewMessageIndicator>
      </View>
    </ProfileContainer>
  </TouchableOpacity>
);

const MessageScreen = ({navigation}) => {
  const [updated, setUpdated] = useState();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const inboxParticipantslist = state.messages.inboxUsers;
  console.log(' INBOX \n ', inboxParticipantslist);

  // inboxParticipants(1)
  const renderItem = ({item}) => {
    let receiverID;
    console.log('ID \n  ', item);
    if (item.receiver != state.mainReducer.oldUser.user.id) {
      receiverID = item.receiver;
    } else {
      receiverID = item.sender;
    }

    return (
      <MessageContainer
        item={item}
        onPress={() => {
          console.log(receiverID);
          openChat(item.inboxid);
          navigation.push('ChatScreen', {
            inboxid: item.inboxid,
            name: item.name,
            receiverID: receiverID,
            lastSender: item.sender,
          });
        }}
      />
    );
  };

  useEffect(() => {
    setUpdated(!updated);
  }, [inboxParticipantslist]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MessageTobBar>
        <PageTitle>Messages</PageTitle>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              // inboxParticipants
              // console.log(inboxParticipants(5));
              // console.log(state.messages.inboxUsers);
            }}>
            <Icon name="md-search" color={'#00A8E8'} size={25}></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={{marginLeft: 12}}
              name="ellipsis-vertical"
              color={'#00A8E8'}
              size={25}></Icon>
          </TouchableOpacity>
        </View>
      </MessageTobBar>

      {(() => {
        if (inboxParticipantslist.length == 0) {
          return (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{color: Colors.black, fontFamily: Fonts.PoppinsMedium}}>
                No Messages
              </Text>
              {/* <Text style={{fontFamily: Fonts.PoppinsMedium}}>
                Start Messaging by searching skill in HomePage{' '}
              </Text> */}
            </View>
          );
        } else {
          return (
            <FlatList
              data={inboxParticipantslist}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              extraData={updated}
            />
          );
        }
      })()}

      {/* <FlatList
        data={inboxParticipantslist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={updated}
      /> */}
    </View>
  );
};

const NewMessageIndicator = item => {
  let newMessage = item.seen;
  if (newMessage == 0) {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          marginTop: 5,
          backgroundColor: '#00A8E8',
          borderRadius: 50,
        }}></View>
    );
  } else {
    return null;
  }
};

export default MessageScreen;
