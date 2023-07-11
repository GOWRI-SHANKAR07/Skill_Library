import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Chatinput, ProfileHeader} from '../styles/Chat';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProfileName, TextContent} from '../styles/Message';
import {Skillinp2} from '../styles/Base-Component';
import FormbackButton from '../components/buttons/FormbackButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors, Normalize} from '../Constants/Theme';
import {windowHeight, windowWidth} from '../utils/Dimension';

import {GiftedChat} from 'react-native-gifted-chat';
import {connect, useDispatch, useSelector} from 'react-redux';
import {inboxParticipants, openChat, sendMessage} from '../Redux/store';
import {getMessages} from '../Redux/messages';
import axios from 'axios';
import {APIURI} from '../Constants/APIconfigs';

const Item = ({item, onPress, textColor, alignSelf, messageStyle}) => (
  <View onPress={onPress} style={[styles.item, alignSelf, messageStyle]}>
    <Text style={[styles.message, textColor]}>{item.text}</Text>
  </View>
);
const ChatScreen = ({route, navigation}) => {
  const [send, setSend] = useState(true);
  let inboxid = route.params.inboxid;
  const name = route.params.name;
  const receiverID = route.params.receiverID;
  const lastSender = route.params.hasOwnProperty('lastSender')
    ? route.params.lastSender
    : 0;

  // console.log(name);
  const allmessages = useSelector(state => state.messages.userMessages);

  // if (allmessages) {
  //   console.log(allmessages);
  // }
  const dispatch = useDispatch();
  // dispatch(getMessages(id))

  const [selectedId, setSelectedId] = useState(null);
  const [messsage, setMessage] = useState();

  const stateData = useSelector(state => state.mainReducer);
  const userID = stateData.oldUser.user.id;

  useEffect(() => {
    setSend(!send);
  }, [allmessages]);

  useEffect(async () => {
    if (inboxid == 0) {
      axios
        .get(APIURI + `inboxID/${userID}/${receiverID}`)
        .then(res => {
          openChat(res.data.Inboxid);
          inboxid = res.data.Inboxid;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, []);

  console.log();

  const handleSendMessage = message => {
    sendMessage({
      sender: userID,
      receiver: receiverID,
      last_msg: message,
      seen: false,
      deleted: false,
    });
    openChat(inboxid);

    setMessage('');
  };

  useEffect(() => {
    if (lastSender != userID) {
      axios
        .put(APIURI + `message/readed${inboxid}`)
        .then(res => {
          inboxParticipants(userID);
        })
        .catch(e => console.log(e));
    }
  }, []);

  const renderItem = ({item}) => {
    // const backgroundColor = item.id === 1 ? Colors.primary : '#E1E1E1';
    const alignSelf = item.sender === userID ? 'flex-end' : 'flex-start';
    const color = item.sender === userID ? 'white' : 'black';
    const messageStyle = item.sender === userID ? styles.right : styles.left;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{color}}
        alignSelf={{alignSelf}}
        messageStyle={messageStyle}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      <ProfileHeader>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            dispatch(getMessages(null));
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.white,
              borderRadius: 50,
              borderColor: Colors.primary,
              borderWidth: 1,
              marginLeft: 5,
              height: windowHeight * 0.06,
              width: windowWidth * 0.12,
              // position: 'absolute',
            }}>
            <AntDesign name="arrowleft" size={25} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 40,
            width: 40,
            marginLeft: 15,
            backgroundColor: '#00A8E8',
            borderRadius: 50,
          }}></View>
        <View style={{flexGrow: 1, marginLeft: 8}}>
          <ProfileName>{name}</ProfileName>
          <TextContent>LastSeen</TextContent>
        </View>
        <TouchableOpacity>
          <Icon
            style={{marginLeft: 12}}
            name="ellipsis-vertical"
            color={'#00A8E8'}
            size={25}></Icon>
        </TouchableOpacity>
      </ProfileHeader>
      <FlatList
        inverted={-1}
        data={allmessages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={send}
      />
      {/* 
      <GiftedChat
        messages={props.messages}
        user={{
          _id: props.user.id,
        }}
        onSend={message => this.send(message[0])}
      /> */}

      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.secondary,
            borderRadius: 30,
            width: '90%',
            margin: 15,
          }}>
          <TextInput
            value={messsage}
            style={{
              // alignSelf: 'stretch',
              marginLeft: 10,
              flexGrow: 1,
              color: Colors.black,
              fontSize: 16,
            }}
            placeholder="Write a Message"
            placeholderTextColor={'#888888'}
            onChangeText={value => setMessage(value)}></TextInput>
          <TouchableOpacity
            onPress={async () => {
              handleSendMessage(messsage);
            }}>
            <Icon
              style={{marginRight: 10}}
              name="send"
              size={25}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // maxWidth: '50%',
    // alignSelf: 'flex-start',
    // minWidth: '30%',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  left: {
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: '#E1E1E1',
  },
  right: {
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor: Colors.primary,
    color: Colors.white,
  },

  message: {
    fontSize: Normalize(18),
  },
});

export default ChatScreen;

// const mapState = (state, {route, navigation}) => ({
//   messages: state.messages,
//   user: state.user,
//   // receiver: route.params.receivingUser,
// });

// export default connect(mapState)(ChatScreen);
