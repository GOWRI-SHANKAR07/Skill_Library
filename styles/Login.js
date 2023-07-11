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

import {Fonts} from '../Constants/Theme';

const {width, height} = Window;

export const AppTitle = styled.Text`
  color: ${primary};
  font-family: ${Fonts.PoppinsBold};
  font-size: ${Normalize(48)};
  line-height: 72px;
  text-align: center;
`;
export const FormH2 = styled.Text`
  font-family: ${Fonts.PoppinsSemiBold};
  color: black;
  font-size: ${Normalize(28)};
  text-align: center;
`;

export const FormH3 = styled.Text`
  color: ${grey2};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
export const NumberInput = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 15px;
  padding-left: 10px;
  /* border: 1px; */
  border-radius: 12px;
  /* border-color: ${grey2}; */

  /* border-radius: 2px;
  border-color: #ddd; */
`;

export const LoginButton = styled.View`
  background-color: ${primary};
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const FormH4 = styled.Text`
  color: ${grey2};
  font-size: 16px;
  width: 80%;
  font-weight: 500;
`;

export const OTPInput = styled.TextInput`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 15px;
  padding-left: 10px;
  border: 1px;
  border-radius: 12px;
  border-color: ${grey2};
  color: black;
  width: 80%;
`;
