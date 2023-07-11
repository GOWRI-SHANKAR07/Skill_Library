import styled from 'styled-components';
import {Normalize} from '../Constants/Theme';
import {windowHeight, windowWidth} from '../utils/Dimension';

// colors
export const Colors = {
  primary: '#00A8E8',
  secondary: '#D1F2FF',
  teritary: '#D1F2FF',
  black: '#000',
  grey: '#939393',
  grey2: '#717070',
  bordergrey: '#F6F4F4',
  white: '#fff',
  greyplaceholder: '#DEDEDE',
  avatarbg: '#F3F3F3',
  avatarbr: '#EBEBEB',
  search: '#9C9C9C',
  prefer: '#8C8C8C',
  project: '#FF0000',
  discrip: '#585858',
};
// fonts
export const Fonts = {
  Poppins: 'Poppins-Bold',
  Poppin: 'Poppins-Light',
  Roboto: 'Roboto-Light',
};

// window width, height
export const Window = {
  width: windowWidth,
  height: windowHeight,
};

const {
  primary,
  secondary,
  teritary,
  bordergrey,
  black,
  grey,
  white,
  greyplaceholder,
  avatarbg,
  avatarbr,
  search,
  prefer,
  grey2,
  project,
  discrip,
} = Colors;

const {Poppins, Poppin, Roboto} = Fonts;

const {width, height} = Window;

export const Container = styled.View`
  flex: 1;
  width: ${width};
  height: ${height};
  background-color: ${white};
`;

export const InfoCont = styled.View`
  width: ${width};
  height: ${height * 0.25};
  border-radius: 25px;
  border: 5px solid ${avatarbr};
`;

export const ProfileCont = styled.View`
    align-items: flex-start;
    justify-content: center;
    padding-left: ${width * 0.36}
    bottom: ${height * 0.04}
`;

export const ProfilePic = styled.Image`
    position: absolute;
    width: ${width * 0.3};
    height: ${height * 0.15};
    left: ${width * 0.05};
    top: ${height * 0.05}
    border: 3px solid ${white};
    border-radius: 60px;
`;

export const Name = styled.Text`
  width: ${width * 0.5};
  height: ${height * 0.05};
  font-family: ${Poppins};
  font-style: normal;
  font-weight: 500;
  font-size: ${Normalize(22)};
  line-height: 36px;
  color: ${black};
`;

export const Skill = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 300;
  font-size: ${Normalize(14)};
  line-height: 21px;
  color: ${black};
`;

export const Phone = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: ${grey2};
`;

export const IconCont = styled.View`
  flex-direction: column;
  left: ${width * 0.83};
  top: ${height * 0.08};
`;

export const H1 = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-size: ${Normalize(14)};
  line-height: 21px;
  color: ${black};
  margin-left: ${width * 0.08};
  margin-top: ${width * 0.05};
`;

export const AddTxt = styled.Text`
    margin-right: ${width * 0.1}
    height: ${height * 0.05};
    border-radius: 5;
    background-color: ${secondary};
    padding: 10px;
    border-color: ${black};                    
    elevation: 3;
    color: ${black};          
    margin: 9px;                    
    border-radius: 15px;
`;

export const LevelCont = styled.View`
  width: ${width * 0.85};
  height: ${height * 0.15};
  background: #d1f2ff;
  border-radius: 15px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const LevelBtn = styled.TouchableOpacity`
    width: ${width * 0.2};
    height: ${height * 0.03}
    background: #00A8E8;
    border-radius: 10px;
    margin-top: ${height * 0.03};
    margin-left: ${width * 0.04};
    align-items: center;
    justify-content: center;
`;

export const LevelTxt = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 500;
  font-size: ${Normalize(16)};
  line-height: 24px;
  color: ${white};
`;

export const ReferCont = styled.View`
  width: ${width * 0.3};
  height: ${height * 0.1};
  margin-right: ${width * 0.04};
`;

export const Optionsbtn = styled.View`
  width: ${width};
  height: ${height * 0.1};
  border: 1px solid ${teritary};
  padding-left: ${width * 0.05}
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

export const OptionsCont = styled.View`
    width: ${width * 0.7};
    flex-direction: row;
    // border: 1px solid #000;
`;

export const OptionsTxt = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 300;
  font-size: ${Normalize(17)};
  line-height: 27px;
  color: ${black};
  margin-left: ${width * 0.1};
`;
