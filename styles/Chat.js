import styled from 'styled-components';
import {windowHeight, windowWidth} from '../utils/Dimension';

// colors
export const Colors = {
  primary: '#00A8E8',
  secondary: '#fff',
  blueAccent: '#D1F2FF',
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
  blueAccent,
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

export const ProfileHeader = styled.View`
  border: 3px;
  border-color: #f6f4f4;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const Chatinput = styled.TextInput`
  color: ${black};
  border-radius: 25px;
  background-color: ${blueAccent};
`;
