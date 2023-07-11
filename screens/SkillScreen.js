import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, RefreshControl } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import FormbackButton from '../components/buttons/FormbackButton'
import { Cont, SkillSelectCont, Colors, Discriptiontxt, Fonts, Headercont, Heading, Skillcont, Skillinp, Skillsearchcont } from '../styles/SkillSelect'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Card } from 'react-native-paper'
import { windowHeight, windowWidth } from '../utils/Dimension'
import FormNextButton from '../components/buttons/FormNextButton'
import { connect, useDispatch, useSelector } from 'react-redux'
import { setSkill } from '../Redux/actions'
// import {vw, vh} from 'react-native-viewport-units';


const skill = [
  {
    skill: 'Programmer  ', id: '1'
  },
  {
    skill: 'Web Developer ', id: '2'
  },
  {
    skill: 'Node JS ', id: '3'
  },
  {
    skill: 'React JS ', id: '4'
  },
  {
    skill: 'React Native ', id: '5'
  },
  {
    skill: 'Adobe Illustrator ', id: '6'
  },
  {
    skill: 'After Effects ', id: '7'
  },
  {
    skill: 'Python Developer ', id: '8'
  },
  {
    skill: 'PhotoShop ', id: '9'
  },
  {
    skill: 'JavaScipt ', id: '10'
  },
  {
    skill: 'WordPress Developer ', id: '11'
  },
  {
    skill: 'MongoDB ', id: '12'
  },
  {
    skill: 'Software Testing ', id: '13'
  },
  {
    skill: 'Electrician ', id: '14'
  },
  {
    skill: 'Mechanic ', id: '15'
  },
  {
    skill: 'GoldSmith ', id: '16'
  },
];

const mapStateToProps = (state) => {
  return {
    data: state.skill
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSkills: (skills) => { dispatch(setSkill(skills)) }
  }
}



class SkillScreen extends Component {

  constructor() {
    super()
    this.state = {
      renderData: skill, // decelaring the fruits list data
      selectedSkills: [],
    }
  }


  onPressHandler(id) {
    let renderData = [...this.state.renderData];           // making copy of renderData data locally
    let selectedSkills = [...this.state.selectedSkills];   // making copy of selectedFruits data locally

    for (let data of renderData) {
      if (data.id == id) {

        data.selected = (data.selected == null) ? true : !data.selected; // making button selcted or not using boolen

        if (data.selected) {
          selectedSkills.push(data.skill);  // push selected fruit value to array
        } else {
          selectedSkills = this.arrayRemove(this.state.selectedSkills, data.skill)  // remove unselected fruit from array
        }
        break;
      }
    }

    this.setState({ renderData });  // updating current selected button data to state
    this.setState({ selectedSkills });  // updating current selected skillls data to state
    console.log(selectedSkills); // logging the selectedSkills
    { this.props.setSkills(selectedSkills) }
 
  }

  // function which remove value from array and return  
  arrayRemove(arr, value) {
    return arr.filter(function (geeks) {
      return geeks != value;
    });
  }

  // go to next page
  goNext = () => {
    this.props.navigation.navigate('Location')
    // {this.props.setSkill}
  }


  render() {
    return (
      <Cont>
        <View style={{ padding: windowWidth * 0.04 }}>
          <TouchableOpacity >
            <FormbackButton />
          </TouchableOpacity>
        </View>
        <Headercont>
          <Heading>Select Your Skill !</Heading>
          <Discriptiontxt>Select your top 3 Skills</Discriptiontxt>
        </Headercont>
        <View>
          <Skillcont>
            <Skillsearchcont>
              <AntDesign
                style={styles.search}
                name="search1"
                size={20}
                color="#717070"
              />
              <Skillinp
                placeholder="Search Your Skill"
                placeholderTextColor={Colors.greyplaceholder}
                onFocus={() => this.props.navigation.navigate('Somma')}
              />
            </Skillsearchcont>
          </Skillcont>
          <Text></Text>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <SkillSelectCont>
            <FlatList
              style={styles.skillSelect}
              columnWrapperStyle={{alignContent:'center', flex: 1,}}
              data={this.state.renderData} // set render data in flatlist
              keyExtractor={item => item.id.toString()} // keyExtractor convert INT  'item.id' value to string 
              numColumns={2}
              renderItem={({ item }) => (
                <View style={{
                  alignSelf: 'center',
                }}>
                  <Card
                    style={
                      item.selected == true
                        ? {
                          borderRadius: 5,
                          backgroundColor: Colors.primary,
                          color: Colors.white,
                          padding: 10,
                          borderColor: Colors.black,
                          elevation: 3,
                          color: Colors.black,
                          padding: 10,
                          margin: 9,
                          borderRadius: 15,
                        }
                        : {
                          borderRadius: 5,
                          backgroundColor: Colors.white,
                          padding: 10,
                          borderColor: Colors.black,
                          elevation: 3,
                          color: Colors.black,
                          padding: 10,
                          margin: 9,
                          borderRadius: 15,
                        }
                    }
                  >
                    <TouchableOpacity
                      color={item.selected == true ? Colors.white : Colors.black}
                      onPress={() => this.onPressHandler(item.id)}
                    >
                      <Text
                        style={
                          item.selected == true
                            ? {
                              borderRadius: 5,
                              backgroundColor: Colors.primary,
                              color: Colors.white,
                            }
                            : {
                              borderRadius: 5,
                              backgroundColor: Colors.white,
                              color: Colors.black,
                            }
                        }>
                        {item.skill}
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </View>
              )}
            />
          </SkillSelectCont>
        </View>
        <View style={{
          width: windowWidth * 0.80,
          height: windowHeight * 0.15,
          paddingLeft: windowWidth * 0.1,
          paddingTop: windowHeight * 0.02,
          alignContent: 'center',
        }}>
          {/*     <Text
            style={{
              fontFamily: Fonts.PoppinsBold,
              color: Colors.primary,
            }}
          >
            Selected Skills :
          </Text>
         <FlatList
            numColumns={2}
            data={this.state.selectedSkills} // set render data in flatlist
            renderItem={({ item }) =>
              <View>
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: Fonts.PoppinsRegular
                  }}
                >
                  {item} ,
                </Text>
              </View>
            }
          /> */}
        </View>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            //   right: windowWidth - 400,
            //   bottom: windowHeight - 820,
          }}>
          <TouchableOpacity style={styles.nxt} onPress={() => this.goNext()}>
            <FormNextButton />
          </TouchableOpacity>
        </View>
      </Cont>
    )
  }
}






export default connect(mapStateToProps, mapDispatchToProps)(SkillScreen);


const styles = StyleSheet.create({
  search: {
    marginTop: 12,
    marginLeft: 26,
  },

  nxt: {
    bottom: windowHeight * -0.88,
  },

  skillSelect: {
    width: windowWidth * 0.99,
    // alignItems: 'center',
  }
});