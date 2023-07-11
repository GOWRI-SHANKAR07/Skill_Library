import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
import FormbackButton from '../components/buttons/FormbackButton';
import { APIURI } from '../Constants/APIconfigs';
import { AppTitle } from '../styles/Login';
import {
  Cont,
  Discriptiontxt,
  Headercont,
  Heading,
  Skillcont,
  Skillinp,
  SkillInput,
  Skillsearchcont,
  Skillsearchcont2,
  SkillSelectCont,
  SkillSuggest,
  SuggestCont,
} from '../styles/SkillSelect';
import { windowHeight, windowWidth } from '../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Fonts } from '../Constants/Theme';
import FormNextButton from '../components/buttons/FormNextButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSkill } from '../Redux/actions';

const SearchSkill = ({ navigation }) => {
  const [query, setQuery] = useState([]);
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  const [selectedSkills, setselectedSkills] = useState([]);

  useEffect(() => {
    axios
      .get(APIURI + `skillquery/${query}`)
      .then(res => {
        console.log(res.data);
        setData(res.data.skillsArr);
        console.log(selectedSkills.indexOf());
      })
      .catch(e => {
        console.log(e);
      });
  }, [query, renderitem]);

  // state
  const details = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();
  const userSkill = details.skill;

  const RemoveSkill = item => {
    const index1 = selectedSkills.indexOf(item);
    const index2 = display.indexOf(item);
    const index3 = data.indexOf(item);
    if (index1 === -1 && index2 > -1) {
      display.splice(index2, 1);
      selectedSkills.splice(index1, 1); // Remove array element
      // data.splice(index3, 1)
      console.log(selectedSkills);
      console.log(display);
      console.log(index1);
    } else {
      console.log('not executed');
    }
  };

  const handleClick = () => {
    dispatch(setSkill(selectedSkills));
    console.log(userSkill);
    // setDisplay('');
    navigation.navigate('Location');
  };

  const renderitem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item.item);
          setDisplay([...display, item.item.skills]);
          setselectedSkills([...selectedSkills, item.item.id]);
          setQuery('');
          setData('');
        }}>
        <View
          style={{
            backgroundColor: Colors.white,
            elevation: 3,
            margin: 6,
            marginBottom: 5,
            border: 2,
            borderColor: Colors.greyBorder,
            borderRadius: 20,
            padding: 10,
            flexWrap: 'wrap',
          }}>
          <SkillSuggest>{item.item.skills}</SkillSuggest>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Cont>
      <View style={{ padding: windowWidth * 0.04 }}>
        <TouchableOpacity>
          <FormbackButton />
        </TouchableOpacity>
      </View>
      <Headercont>
        <Heading>Select Your Skill !</Heading>
        <Discriptiontxt>Select your top 3 Skills</Discriptiontxt>
      </Headercont>
      <View>
        <Skillcont>
          <Skillsearchcont style={{ elevation: 5 }}>
            <AntDesign
              style={styles.search}
              name="search1"
              size={20}
              color={Colors.greyDark}
            />
            <SkillInput
              placeholder="Search a Skill"
              onChangeText={text => setQuery(text)}
              value={query}
              placeholderTextColor={Colors.greyplaceholder}
              style={
                query
                  ? { color: Colors.black, fontFamily: Fonts.PoppinsMedium }
                  : { color: Colors.blues }
              }
            />
          </Skillsearchcont>
        </Skillcont>
      </View>
      <View>
        <SuggestCont
          data={data}
          key={item => item.id}
          renderItem={renderitem}
        />
      </View>
      <SkillSelectCont>
        <FlatList
          style={{ marginTop: 15 }}
          data={display}
          key={item => item.id}
          numColumns={2}
          renderItem={item => (
            // console.log({display})
            <TouchableOpacity
              style={{
                backgroundColor: Colors.primary,
                elevation: 3,
                padding: 10,
                margin: 9,
                borderRadius: 15,
                width: windowWidth * 0.3,
                alignItems: 'center',
              }}
              onPress={() => RemoveSkill(item.item)}>
              <Text style={{ color: Colors.white }}>{item.item}</Text>
            </TouchableOpacity>
          )}
        />
      </SkillSelectCont>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity style={styles.nxt} onPress={() => handleClick()}>
          <FormNextButton />
        </TouchableOpacity>
      </View>
    </Cont>
  );
};

export default SearchSkill;

const styles = StyleSheet.create({
  search: {
    marginTop: 12,
    marginLeft: 26,
  },

  multiSelectContainer: {
    alignSelf: 'center',
    width: windowWidth * 0.8,
  },

  nxt: {
    bottom: windowHeight * -0.88,
  },
});
