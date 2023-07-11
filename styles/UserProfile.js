import styled from 'styled-components';
import { Normalize } from '../Constants/Theme';
import { windowHeight, windowWidth } from '../utils/Dimension';
import { HEADER_HEIGHT_EXPANDED, HEADER_HEIGHT_NARROWED } from '../Constants/AnimatedConstants';


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

export const Container = styled.View`
    flex: 1;
    width: ${width};
    height: ${height};
    background-color: ${white};
    align-items: center;
`;

export const ProfileCont = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // margin-top: ${height * 0.04};
`;

export const ProfilePic = styled.Image`
    width: ${width * 0.3};
    height: ${height * 0.15};
    border: 3px solid ${white};
    border-radius: 60px;
`;

export const UserName = styled.Text`
    font-family: ${Poppin};
    font-style: normal;
    font-weight: 600;
    font-size: ${Normalize(24)};
    line-height: 36px;
    color: ${black};
`;

export const UserId = styled.Text`
font-family: ${Poppin};
font-style: normal;
font-weight: 300;
font-size: ${Normalize(13)};
line-height: 20px;
color: ${black};
`;

export const UserSkill = styled.Text`
    font-family: ${Poppin};
    font-style: normal;
    font-weight: 400;
    font-size: ${Normalize(14)};
    line-height: 21px;
    color: ${black};
`;

export const UserBtnCont = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${height * 0.025};

`;

export const UserBtn = styled.TouchableOpacity`
    width: ${width * 0.3};
    height: ${height * 0.05};
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const UserBtnTxt = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-transform: capitalize;
`;

export const UserDcrpCont = styled.View`
    // border: 1px solid ${black};
    margin-top: ${height * 0.02};
    align-items: center;
`;

export const UserDcrptxt = styled.Text`
    width: ${width * 0.8};
    font-family: ${Poppin};
    font-style: normal;
    font-weight: 300;
    font-size: ${Normalize(14)};
    line-height: 21px;
    color: ${black};
    text-align: center;
`;

export const SkillTxt = styled.Text`
    margin-top: ${height * 0.02};
    font-family: ${Poppins};
    font-style: normal;
    font-weight: 600;
    font-size: ${Normalize(18)};
    line-height: 30px;
    text-align: center;
    color: ${black};
`;

export const SkillCont = styled.View`
    width: ${width * 0.3};
    border: 1px solid ${black};
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: ${height * 0.2}
`;

export const SkillImg = styled.Image`
    width: ${width * 0.4};
    height: ${height * 0.2};
    border: 1px solid ${grey2};
    margin-bottom: ${height * 0.04};
    background-color: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(178, 178, 178, 0.0442647) 43.23%, rgba(108, 108, 108, 0.215) 70.83%, rgba(37, 37, 37, 0.389659) 84.9%, rgba(0, 0, 0, 0.48) 100%);
    border-radius: 15px;
    elevation: 20;
`;

export const AddSkill = styled.View`
    width: ${width * 0.25};
    height: ${height * 0.11};
    border: 1px solid ${grey2};
    margin-top: ${height * 0.03};
    margin-bottom: ${height * 0.01};
    align-self: center;
    background-color: ${white};
    border-radius: 15px;
    elevation: 10;
`;

export const AddSkillTxt = styled.Text`
    font-family: ${Poppins};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    color: ${black};
    text-align: center;
`;


export const HeaderCont = styled.View`
    postion: absolute;
`;