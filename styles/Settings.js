import styled from 'styled-components';
import { Normalize } from '../Constants/Theme';
import { windowHeight, windowWidth } from '../utils/Dimension';

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

const { Poppins, Poppin, Roboto } = Fonts;

const { width, height } = Window;

export const SettingsCont = styled.View`
    height: ${windowHeight};
    background-color: ${white};
    flex: 1;
`;

export const HeaderCont = styled.View`
    width: ${windowWidth};
    height: ${windowHeight * 0.20};
    justify-content: center;
    border-radius: 25px;
    backgroundColor: ${white};
    elevation: 5;
`;

export const InnerHeader = styled.View`
    align-self: flex-start;
    margin-left: ${windowWidth * 0.065};
`;

export const SaveBtnCont = styled.View`
    elevation: 3;
    width: ${windowWidth * 0.2};
    height: ${windowHeight * 0.04};
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    background-color: ${primary};
    border-radius: 20px;
    margin-left: ${windowWidth * 0.65};
    marginTop: ${windowHeight * -0.035};
`;

export const FormCont = styled.View`
    height: ${height};
    margin-left: ${width * 0.02};
`;

export const FormScroll = styled.ScrollView`
    margin-bottom: ${windowHeight * 0.2};
    width: ${windowWidth * 0.85};
    padding-left: ${windowWidth * 0.05};
    padding-right: ${windowWidth * 0.05};
`;

export const FormInput = styled.TextInput`
    background-color: ${white}
    elevation: 3;
    border-radius: 17px;
    margin-top: ${windowHeight * 0.02};
    padding-left: ${windowWidth * 0.05};
    color: ${black};
    font-family: ${Poppin};
    font-size: ${Normalize(16)};
    border-width: 0.5;
    border-color: ${grey};
`;

export const FormInputDob = styled.TouchableOpacity`
    height: ${windowHeight * 0.06} 
    background-color: ${white}
    elevation: 3;
    border-radius: 17px;
    margin-top: ${windowHeight * 0.02};
    padding-left: ${windowWidth * 0.05};
    color: ${black};
    font-family: ${Poppin};
    font-size: ${Normalize(18)};
    border-width: 0.5;
    border-color: ${grey};
`;

export const FormInputBtn = styled.TouchableOpacity`
    width: ${windowWidth * 0.75};
    height: ${windowHeight * 0.06}
    background-color: ${white};
    elevation: 3;
    border-radius: 17px;
    margin-top: ${windowHeight * 0.02};
    padding-left: ${windowWidth * 0.05};
    color: ${black};
    font-family: ${Poppin};
    font-size: ${Normalize(18)};
    border-width: 0.5;
    border-color: ${grey};
    align-items: flex-start;
    justify-content: center;
`;

