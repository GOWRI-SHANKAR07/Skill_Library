import styled from 'styled-components';
import {windowHeight, windowWidth} from '../utils/Dimension';

// colors
export const Colors = {
  primary: '#00A8E8', //Blue
  secondary: '#D1F2FF',

  black: '#000',
  white: '#FFFFFF',
  black2: '#585858',

  grey: '#F6F4F4',
  greyDark: '#717070',
  greyBorder: '#939393',
  greyplaceholder: '#A3A3A3',
  greyMessage: '#E1E1E1',
  arrow: '#C9C9C9',

  bottomGradient:
    'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(178, 178, 178, 0.0442647) 43.23%, rgba(108, 108, 108, 0.215) 70.83%, rgba(37, 37, 37, 0.389659) 84.9%, rgba(0, 0, 0, 0.48) 100%);',

  avatarbg: '#F3F3F3',
  avatarbr: '#EBEBEB',
  search: '#9C9C9C',
  prefer: '#8C8C8C',
  project: '#FF0000',
  discrip: '#585858',
};

const {
  primary,
  secondary,
  teritary,
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

// fonts
export const Fonts = {
  PoppinsBold: 'Poppins-Bold',
  PoppinsLight: 'Poppins-Light',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsSemiBold: 'Poppins-SemiBold',
  Roboto: 'Roboto-Light',
};

const {
  PoppinsBold,
  PoppinsLight,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
  Roboto,
} = Fonts;

// window width, height
export const Window = {
  width: windowWidth,
  height: windowHeight,
};

import {Dimensions, Platform, PixelRatio} from 'react-native';

// // based on iphone 5s's scale
const scale = Window.width / 400;

export function Normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const H1 = styled.Text`
  /* Sub - H1 */

  font-family: ${PoppinsMedium};
  font-style: normal;
  font-size: ${Normalize(18)};
  line-height: 21px;
`;

export const H2 = styled.Text`
  font-family: ${PoppinsRegular};
  font-size: ${Normalize(12)};
`;
export const H3 = styled.Text`
  font-family: ${PoppinsRegular};
  font-size: ${Normalize(10)};
`;
export const H4 = styled.Text`
  font-family: ${PoppinsRegular};
  font-size: ${Normalize(8)};
`;

export const SubOption = styled.Text`
  font-family: ${PoppinsRegular};
  font-size: ${Normalize(18)};
`;

export const FormTitle = styled.Text`
  font-family: ${PoppinsLight};
  font-size: ${Normalize(16)};
`;

export const GreyHighlightFont = styled.Text`
  font-family: ${PoppinsLight};
  font-size: ${Normalize(12)};
`;
export const SubTitle = styled.Text`
  font-family: ${PoppinsRegular};
  font-size: ${Normalize(18)};
`;

export const PageTitle = styled.Text`
  font-family: ${PoppinsMedium};
  font-size: ${Normalize(20)};
`;

export const Para = styled.Text`
  font-family: ${PoppinsLight};
  font-size: ${Normalize(14)};
`;
export const FormHead = styled.Text`
  font-family: ${PoppinsBold};
  font-size: ${Normalize(26)};
`;

export const GreyPlaceHolderFont = styled.Text`
  font-family: ${PoppinsSemiBold};
  font-size: ${Normalize(14)};
`;
export const ProfileNameFont = styled.Text`
  font-family: ${PoppinsSemiBold};
  font-size: ${Normalize(22)};
  color: ${black};
`;
export const ButtonFont = styled.Text`
  font-family: ${PoppinsRegular};
  font-size: ${Normalize(14)};
`;

export const ButtonFont2 = styled.Text`
  font-family: ${PoppinsSemiBold};
  font-size: ${Normalize(18)};
`;
export const ButtonFont3 = styled.Text`
  font-family: ${PoppinsSemiBold};
  font-size: ${Normalize(18)};
  `;