import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, ProfileNameFont} from '../Constants/Theme';
import {ProfileCont} from '../styles/Profile';
import {
  Btn,
  BtnCont,
  BtnTxt,
  Container,
  InfoCont,
  UserCont,
  UserDscrpCont,
  UserDscrpTxt,
  UserName,
  UserPic,
  UserSkill,
  UserSkillBtn,
  UserSkillCont,
  UserSkillTxt,
} from '../styles/Search';
import {ProfilePic} from '../styles/UserProfile';
import {windowHeight, windowWidth} from '../utils/Dimension';

const UserSearchResult = ({navigation, item}) => {
  // console.log(item)
  // console.log(item.item.name)

  return (
    <Container>
      <UserCont>
        <ProfileCont style={styles.profile}>
          <UserPic source={require('../assets/images/profile.jpg')} />
          <InfoCont>
            <UserName>{item.item.name}</UserName>
            <UserSkill>React-native Developer</UserSkill>
          </InfoCont>
        </ProfileCont>
        <UserDscrpCont>
          <UserDscrpTxt>{item.item.description}</UserDscrpTxt>
        </UserDscrpCont>
        {/* 
                SKILL LIST
                <UserSkillCont>
                    <UserSkillBtn>
                        <UserSkillTxt>Logo</UserSkillTxt>
                    </UserSkillBtn>
                    <UserSkillBtn>
                        <UserSkillTxt>Designing</UserSkillTxt>
                    </UserSkillBtn>
                    <UserSkillBtn>
                        <UserSkillTxt>PhotoShop</UserSkillTxt>
                    </UserSkillBtn>
                </UserSkillCont> */}
        <BtnCont>
          <Btn
            // onPress={()=>navigation.navigate('ChatScreen')}
            onPress={() => {
              // console.log(item.item.userId);
              navigation.push('ChatScreen', {
                inboxid: 0,
                name: item.item.name,
                receiverID: item.item.userId,
              });
            }}
            style={{
              backgroundColor: Colors.primary,
            }}>
            <BtnTxt
              style={{
                color: Colors.white,
              }}>
              Message
            </BtnTxt>
          </Btn>
          <Btn
            onPress={() => {
              navigation.push('UserProfileScreen', {
                id: item.item.userId,
              });
            }}
            style={{
              backgroundColor: Colors.white,
              borderColor: Colors.black2,
            }}>
            <BtnTxt
              style={{
                color: Colors.black,
              }}>
              View Profile
            </BtnTxt>
          </Btn>
        </BtnCont>
      </UserCont>
    </Container>
  );
};

export default UserSearchResult;

const styles = StyleSheet.create({
  profile: {
    right: windowWidth * 0.3,
    top: windowHeight * -0.01,
    flexDirection: 'row',
    marginLeft: windowWidth * 0.26,
  },
});
