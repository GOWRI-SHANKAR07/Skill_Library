import styled from 'styled-components';
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

export const MessageTobBar = styled.View`
  border: 2px ${bordergrey};
  padding: 20px;
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.Text`
  color: ${black};
  font-size: 23px;
  font-family: ${Poppins};
  font-weight: 300;
`;
export const ProfileContainer = styled.View`
  flex-direction: row;
  padding-left: 10px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;
  border: 1px ${bordergrey};
`;

export const ProfileName = styled.Text`
  color: ${black};
  font-size: 14px;
  font-family: ${Poppins};
  font-weight: 400;
`;

export const TextContent = styled.Text`
  color: ${grey};
  /* font-weight: 100; */
  font-family: ${Poppin};
`;
