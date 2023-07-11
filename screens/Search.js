import axios from 'axios';
import React, {useState, useEffect} from 'react';
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
  TouchableNativeFeedback,
  Pressable,
} from 'react-native';
import {APIURI} from '../Constants/APIconfigs';
import {windowHeight, windowWidth} from '../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors, Fonts} from '../Constants/Theme';
import FormNextButton from '../components/buttons/FormNextButton';
import FormBackButton from '../components/buttons/FormbackButton';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchResult, setSkill} from '../Redux/actions';

const Search = ({navigation}) => {
  const [query, SetQuery] = useState();
  const [data, SetData] = useState();
  const [selectedSkills, setselectedSkills] = useState([]);

  let stateData = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(APIURI + `skillquery/${query}`)
      .then(res => {
        console.log(res.data);
        SetData(res.data.skillsArr);
      })
      .catch(e => {
        console.log(e);
      });
  }, [query]);

  const handleClick = () => {
    dispatch(setSkill(selectedSkills));
    console.log(userSkill);
    // setDisplay('');
    navigation.navigate('Location');
  };
  return (
    <View style={{backgroundColor: 'white',flex:1,}}>
      <View style={styles.search}>
        <TouchableOpacity onPress={() => SetData('')}>
          <AntDesign
            style={styles.iconstyle}
            name="search1"
            size={28}
            color="skyblue"
          />
        </TouchableOpacity>

        <TextInput
          style={styles.SearchInputStyle}
          placeholder="Search Your Skill"
          value={query}
          onChangeText={text => SetQuery(text)}
          placeholderTextColor={Colors.greyplaceholder}
        />
        <TouchableOpacity
          onPress={() => {
            SetQuery('');
            SetData('');
          }}>
          <AntDesign
            style={styles.iconstyle}
            name="close"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{marginTop: 15}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={async () => {
              await axios
                .post(`${APIURI}search`, {
                  Id: stateData.oldUser.user.id,
                  skill: query,
                  long: stateData.oldUser.user.longitude,
                  lat: stateData.oldUser.user.latitude,
                })
                .then(res => {
                  dispatch(setSearchResult(res.data));
                })
                .catch(e => console.log(e));

              navigation.navigate('SearchResult', {
                text: query,
              });
              console.log(query);
            }}
            style={{
              marginBottom:15,  
              padding: 15,
              paddingLeft:25,        
            }}>
            <Text style={{color: 'black'}}>
            <AntDesign
            style={styles.iconstyle}
            name="search1"
            size={18}
            color="gray"
            />    {item.skills}   </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    elevation: 5,

  },
  iconstyle: {
    marginTop: 18,
    marginHorizontal: 16,
  },
  SearchInputStyle: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 15,
    margin: 2,
    color: 'black',
  },
  nxt: {
    bottom: windowHeight * -0.88,
  },
});

export default Search;
