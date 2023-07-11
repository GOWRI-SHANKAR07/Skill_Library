import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts} from '../Constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {windowHeight, windowWidth} from '../utils/Dimension';
import JobPostComponent from '../components/JobPost';
import BottomPopup from '../components/Popup-Modals/BottomPopup';
import axios, {Axios} from 'axios';
import {APIURI} from '../Constants/APIconfigs';
import {useSelector} from 'react-redux';
import {setRefresh} from '../Redux/actions';

const JobpostScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [postdata, setPostData] = useState();
  const [Refreshing, setRefreshing] = useState(false);

  const stateData = useSelector(state => state.mainReducer);

  // retrieving name from state & storing in the userName var
  const userID = stateData.oldUser.hasOwnProperty('user')
    ? stateData.oldUser.user.id
    : '';

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2500);
  };

  const handleSave = () => {
    axios
      .post(APIURI + 'newjobpost', {
        Title: Title,
        Description: Description,
        id: userID,
      })
      .catch(e => console.log(e))
      .then(() => {
        setModalVisible(!modalVisible);
      });
  };

  useEffect(() => {
    axios
      // .get(APIURI + `jobpost/1`)
      .get(APIURI + `jobpost/${userID}`)
      .then(res => {
        setPostData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch(e => console.log('JOBPOST -> ', e));
  }, []);

  const renderItem = item => {
    return <JobPostComponent item={item} navigation={navigation} />;
  };

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center',
        padding: 20,
      }}>
      <TouchableNativeFeedback
        onPress={() => setModalVisible(!modalVisible)}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: Colors.secondary,
            width: '70%',
            flexDirection: 'row',
            borderRadius: 20,
            padding: 10,
          }}>
          <Ionicons name="add-circle" color={Colors.black} size={20} />
          <Text
            style={{
              marginLeft: 8,
              fontFamily: Fonts.PoppinsMedium,
              fontSize: 13,
            }}>
            Add Your Service Request
          </Text>
        </View>
      </TouchableNativeFeedback>
      {/* <JobPostComponent
        title="LOGO"
        name="Tyler"
        description="loremsdfojwandfjbsaodfnsponfipnasd"
        time="posted ago "></JobPostComponent> */}
      <ScrollView
        style={{marginBottom: windowHeight * 0.01, width: windowWidth}}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={() => onRefresh()}
          />
        }>
        <FlatList
          style={{width: '95%', height: windowHeight, paddingLeft: 35}}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          data={postdata}
          keyExtractor={item => item.id}
        />
      </ScrollView>

      <BottomPopup visible={modalVisible}>
        <View
          style={{
            width: '100%',
            height: '70%',
            marginTop: 'auto',
            borderColor: '#ccc',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: 'white',
            elevation: 20,
            padding: 20,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: Fonts.PoppinsMedium,
                fontSize: 18,
                color: Colors.black,
              }}>
              Add your service request
            </Text>
            <Feather
              onPress={() => setModalVisible(!modalVisible)}
              name="x"
              color={Colors.primary}
              size={30}
            />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={[styles.formTitle, {marginBottom: 10}]}>
              Title for your request
            </Text>
            <TextInput
              placeholder="Title"
              style={styles.input}
              onChangeText={value => setTitle(value)}></TextInput>
            <Text style={[styles.formTitle, {marginBottom: 10}]}>
              Description
            </Text>
            <TextInput
              multiline={true}
              placeholder="Description"
              onChangeText={value => setDescription(value)}
              style={[
                styles.input,
                {height: '35%', textAlignVertical: 'top'},
              ]}></TextInput>
          </View>
          <TouchableNativeFeedback
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => handleSave()}>
            <View
              style={{
                alignSelf: 'center',
                backgroundColor: Colors.primary,
                borderRadius: 15,
                width: '40%',
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: Fonts.PoppinsSemiBold,
                }}>
                Save
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </BottomPopup>
    </View>
  );
};

export default JobpostScreen;

const styles = StyleSheet.create({
  formTitle: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
    fontSize: 14,
    marginTop: 10,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 15,

    elevation: 3,
  },
});
