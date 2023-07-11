import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  style,
  Dimensions,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import SearchBox from '../components/SearchBox';
import UserSearchResult from '../components/UserSearchResult';
import {Colors, H1, H2, H3} from '../Constants/Theme';
import {AppTitle} from '../styles/Login';
import {Skillinp, Skillsearchcont2} from '../styles/SkillSelect';
import {SkillCont} from '../styles/UserProfile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {windowHeight} from '../utils/Dimension';

const SearchResult = ({route, navigation}) => {
  const [text, setText] = useState(route.params.text);
  const textHandler = val => {
    setText(val);
  };

  const textClearHandler = () => {
    setText('');
  };

  const stateData = useSelector(state => state.mainReducer);
  const data = stateData.searchResult.SkillResult;
  // console.log(data);

  const renderItem = item => {
    return <UserSearchResult item={item} navigation={navigation} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          height: windowHeight * 0.07,
          borderRadius: 30,
          margin: 20,
          borderColor: Colors.primary,
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign
          style={{marginLeft: 26}}
          name="search1"
          size={20}
          color={Colors.primary}
        />
        <TextInput
          style={{flexGrow: 1}}
          value={text}
          placeholder={'Search'}
          placeholderTextColor={Colors.greyplaceholder}
          onChangeText={textHandler}
        />
        <TouchableOpacity onPress={textClearHandler} style={{marginRight: 20}}>
          <AntDesign
            style={{marginLeft: 26}}
            name="close"
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <H2
          style={{
            color: Colors.black,
          }}>
          {stateData.searchResult.info}
        </H2>
      </View>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchResult;
