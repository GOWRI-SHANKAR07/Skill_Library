import styled from 'styled-components';
import { Normalize } from '../Constants/Theme';
import {windowHeight, windowWidth} from '../utils/Dimension';

// colors
export const Colors = {
  primary: '#00A8E8',
  secondary: '#fff',
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
    align-items: center;
    // justify-content: center;
    background: ${white};
`;

export const UserCont = styled.View`
    width: ${width * 0.9};
    height: ${height * 0.35};
    box-sizing: border-box;
    background: ${white};
    border: 3px solid ${bordergrey};
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    margin-top: ${width * 0.07};
    `;

export const UserPic = styled.Image`
    width: ${width * 0.22};
    height: ${height * 0.11};
    border: 3px solid ${white};
    border-radius: 60px;
`;

export const InfoCont = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: ${width * 0.02};
    margin-top: ${height * 0.03};
`;

export const UserName = styled.Text`
    font-family: ${Poppins};
    font-style: normal;
    font-weight: 500;
    font-size: ${Normalize(14)};
    line-height: 21px;
    text-transform: capitalize;
    color: ${black};
`;

export const UserSkill = styled.Text`
    font-family: ${Poppin};
    font-style: normal;
    font-weight: 400;
    font-size: ${Normalize(12)};
    line-height: 18px;
    color: ${grey2};
    width: ${width * 0.315};
`;

export const UserDscrpCont = styled.View`
    width: ${width * 0.7};
    hieght: ${height};
`;

export const UserDscrpTxt = styled.Text`
    font-family: ${Poppin};
    font-style: normal;
    font-weight: 400;
    font-size: ${Normalize(12)};
    line-height: 16px;
    text-transform: capitalize;
    color: ${grey2};
`;

export const UserSkillCont = styled.View`
    flex-direction: row;
    margin-top: ${height * 0.01};
    width: ${width * 0.6};
    justify-content: flex-start;
`;

export const UserSkillBtn = styled.View`
    align-items: center;
    justify-content: center;
    background: ${teritary};
    border-radius: 20px;
    width: ${width * 0.18};
    padding: 5px;
    margin-right: ${width * 0.02};
`;

export const UserSkillTxt = styled.Text`
    font-family: ${Poppin};
    font-style: normal;     
    font-weight: 400;
    font-size: ${Normalize(12)};
    line-height: 12px;
    text-transform: capitalize;
    color: ${black};
`;

export const BtnCont = styled.View`
    width: ${width * 0.8};
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${height * 0.02}
`;

export const Btn = styled.TouchableOpacity`
    width: ${width * 0.3};
    height: ${height * 0.04};
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${black};
`;

export const BtnTxt = styled.Text`
    font-family: ${Poppin};
    font-style: normal;
    font-weight: 400;
    font-size: ${Normalize(14)};
    line-height: 21px;
`;