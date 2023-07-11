import styled from 'styled-components';
import {Normalize} from '../Constants/Theme';
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

export const Headercont = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 500px;
  height: 170px;
  margin-left: 25px;
`;

export const Heading = styled.Text`
  font-family: ${Poppins};
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 50px;
  color: ${primary};
  width: 300px;
  justify-content: center;
  align-items: center;
`;

export const Headings = styled.View`
  height: ${windowHeight - 600};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Headingstxt = styled.Text`
  font-family: ${Poppins};
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  color: ${primary};
`;

export const Headingscont = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${windowWidth};
  height: ${windowHeight};
`;

export const Welco = styled.Text`
  font-family: ${Poppins};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 42px;
  color: ${black};
`;

export const Logindesc = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  color: ${grey2};
`;

export const Discriptiontxt = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${discrip};
  width: 500px;
  height: 22px;
`;

export const Skillcont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const Skillsearchcont = styled.View`
  flex-direction: row;
  background: ${white};
  //   border: 1px solid ${black};
  box-sizing: border-box;
  border-radius: 35px;
  width: ${windowWidth * 0.8};
  height: 50px;
`;

export const Skillsearchcont2 = styled.View`
  flex-direction: row;
  display: flex;
  background: ${white};
  border: 1px solid;
  border-color: #00a8e8;
  box-sizing: border-box;
  border-radius: 30px;
  width: 90%;
  height: 48px;
`;

export const Skillinp = styled.TextInput`
  width: 200px;
  font-family: ${Poppin};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: ${search};
  margin-left: 22px;
  top: ${height * 0.002};
`;

export const Skillbtncont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  // margin-top: 10px;
  // margin-left: 10px;
`;

export const Skillbtntxt = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${black};
`;

export const SkillSelect = styled.Text`
  background-color: ;
`;

export const Cont = styled.View`
  flex: 1;
  background-color: ${white};
  flex-direction: column;
  height: ${windowHeight};
`;

export const SkillSelectCont = styled.View`
  align-self: center;
  align-items: center;
  width: ${windowWidth * 0.9};
  // height: ${windowHeight * 0.425};
  border-radius: 1px;
  border-color: ${primary};
`;

export const SkillInput = styled.TextInput`
  font-family: ${Poppin};
  font-size: ${Normalize(20)};
  margin-left: 14px;
  top: ${height * 0.002};
  width: ${windowWidth * 0.4};
`;

export const SkillSuggest = styled.Text`
  font-family: ${Poppin};
  font-size: ${Normalize(18)};
  color: ${black};
  left: ${windowWidth * 0.05};
  flex-wrap: wrap;
`;

export const SuggestCont = styled.FlatList`
  width: ${windowWidth * 0.8};
  align-self: center;
  border-radius: 15px;
  //   border: 1px solid ${grey};
`;
