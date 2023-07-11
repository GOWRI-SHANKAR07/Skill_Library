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
  background-color: ${primary};
`;

// export const InnerCont = styled.View `
//     flex: 1;
//     align-items: center;
//     justify-content: center;
// `;

// export const Text = styled.Text `
//     text-align: center;
//     font-family: ${Poppins};
//     font-size: 40px;
//     color: ${secondary};
//     font-weight: bold;
// `;

// export const SubTxt = styled.Text `
//     text-align: center;
//     font-family: ${Poppins};
//     color: ${secondary};
//     font-size: 15px;
//     font-weight: 700;
// `;

// export const Content = styled.View `
//     flex: 2;
//     background-color: ${secondary};
//     align-items: center;
//     justify-content: center;

// `;

// export const Signinbtn = styled.TouchableOpacity `
//     width: 323px;
//     height: 50px;
//     background-color: ${teritary};
//     border-radius: 35px;
//     flex-direction: row;
//     text-align: center;
//     top: 30%
// `;

// export const Signintxt = styled.Text `
//     color: ${black};
//     font-family: ${Roboto};
//     font-size: 18px;
//     text-align: center;
//     padding: 10px;
// `;

// export const Formcont = styled.View `
//     flex: 1;
//     top: 10%;
//     left: 10%;
// `;

// export const Formtit = styled.Text `
//     font-size: 22px;
//     color: ${secondary};
//     font-family: ${Poppins};
//     width:330px;
//     height: 178px;
// `;

// export const Formdetails = styled.View `
//     flex: 2;
//     background-color: ${secondary};
// `;

// export const Formtxt = styled.Text `
//     font-family: ${Poppin};
//     font-size: 16px;
//     color: ${black};
//     top: 20%;
//     left: 55px;
// `;

// export const Styledtextinput = styled.View `
//     width: 323px;
//     height: 50px;
//     background-color: ${teritary};
//     border-radius: 35px;
//     flex-direction: column;
//     top: 25%;
//     left: 11%;
// `;

// export const StyledTxt = styled.TextInput `
//     font-size: 12px;
//     font-family: ${Poppin};
//     width: 300px;
//     left: 25px;
// `;

// export const Line = styled.View`
//   height: 1px;
//   width: 270px;
//   background-color: ${grey};
//   left: 25px;
//   bottom: 10px;
// `;

// export const Styledtextinput2 = styled.View `
//     width: 323px;
//     height: 50px;
//     background-color: ${teritary};
//     border-radius: 35px;
//     flex-direction: column;
//     top: 10%;
//     left: 11%;
// `;

// export const StyledTxt2 = styled.TextInput `
//     font-size: 12px;
//     font-family: ${Poppin};
//     width: 300px;
//     left: 25px;
// `;

// export const Line2 = styled.View`
//   height: 1px;
//   width: 270px;
//   background-color: ${grey};
//   left: 25px;
//   bottom: 10px;
// `;

// export const Skipcont = styled.View `
//     top: 60px;
// `;

// export const Skipbtn = styled.TouchableOpacity `
//     width: 123px;
//     height: 43px;
//     background-color: ${teritary};
//     border-radius: 35px;
//     flex-direction: row;
//     text-align: center;
//     top: 30%
//     left: 55px;
//     background: #FFFFFF;
//     border: 1px solid #939393;
//     box-sizing: border-box;
//     border-radius: 35px;
// `;

// export const Skiptxt = styled.Text `
//     color: ${black};
//     font-family: ${Poppin};
//     font-size: 18px;
//     font-weight: 500;
//     font-style: normal;
//     left: 10px;
//     bottom: 3px;
//     text-align: center;
//     padding: 10px;
//     width: 100px;
//     height: 50px;
// `;

// export const Dob = styled.TextInput `
//     font-size: 12px;
//     font-family: ${Poppin};
//     width: 300px;
//     left: 65px;
//     bottom: 42px;
// `;

// export const Line3 = styled.View`
//   height: 1px;
//   width: 230px;
//   background-color: ${grey};
//   left: 65px;
//   bottom: 53px;
// `;

// export const Mob = styled.TextInput `
//     font-size: 16px;
//     font-family: ${Poppin};
//     width: 300px;
//     top: 2px;
//     left: 50px;
//     bottom: 42px;
// `;

// export const Verticaleline = styled.View `

// width: 25px;
// height: 1px;
// top: 25px;
// left: 28px;
// transform: rotate(90deg);
// background-color: ${grey};
// `;

// export const Mobno = styled.Text `
//     font-family: ${Roboto};
//     font-size: 18px;
//     color: ${black};
//     font-weight: 500;
//     width: 34.06px;
//     height: 21px;
//     line-height: 21px;
//     top: 15px;
//     left: 10px;
// `;

// export const Mobcont = styled.View `
//     flex-direction: column;
//     bottom: 22px;
//     left: 7px;
// `;

// export const Imgcont = styled.View `
// position: absolute;
// width: 200px;
// height: 200px;
// `;

// export const Img = styled.Image `
//     position: absolute;
//     width: 230px;
//     height: 246px;
//     top: 220px;
//     left: 80px;
// `;

// export const Chargescont = styled.View `
//     width: 200px;
//     heigth: 100px;
//     top: 20px;
// `;

// export const Chargestxt = styled.Text `
//     position: absolute;
//     width: 90px;
//     height: 24px;
//     left: 72px;
//     top: 82px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 600;
//     font-size: 16px;
//     line-height: 24px;
//     color: #000000;
// `;

// export const Chargesbtncont = styled.TouchableOpacity `
// position: absolute;
// width: 81px;
// height: 33px;
// left: 171px;
// top: 80px;
// border: 1px solid #939393;
// box-sizing: border-box;
// border-radius: 8px;
// justify-content: center;
// align-items: center;
// `;

// export const Chargesbtntxt = styled.Text `
// width: 38px;
// height: 21px;
// font-family: Poppins;
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 21px;
// color: ${grey};
// `;

// export const Distcont = styled.View `
//     width: 200px;
//     height: 200px;
//     flex-direction: row;
// `;

// export const Distbtn = styled.TouchableOpacity `
//     width: 86px;
//     height: 86px;
//     top: 55px;
//     left: 43px;
//     background: ${white};
//     border: 1px solid ${grey};
//     border-radius: 500px;
// `;

// export const Gendercont = styled.View `
//     flex-direction: row;
//     width: 300px;
//     height: 100px;
//     top: 150px;
//     left: 55px;
//     justify-content: space-between;
// `;

// export const Genderbtn = styled.TouchableOpacity `
//     width: 80px;
//     height: 80px;
//     border: 1px solid ${grey};
//     box-sizing: border-box;
//     border-radius: 50px;
// `;

// export const Genderimg = styled.Image `
//     width: 42px;
//     height: 45px;
//     top: 19px;
//     left: 17px;
// `;

// export const Genderhead = styled.Image `
//     width: 45px;
//     height: 41px;
//     top: -36px;
//     left: 17px;
// `;

// export const Prefercont = styled.TouchableOpacity `
//     width: 170px;
//     height: 20px;
//     margin-top: 145px;
//     margin-left: 79px;
// `;

// export const Prefertxt = styled.Text `
// font-family: ${Poppin};
// font-style: normal;
// font-weight: 500;
// font-size: 13px;
// line-height: 19px;
// color: ${prefer};
// text-decoration: underline
// `;

// export const Jobcont = styled.View `
//     flex-direction: row;
//     width: 300px;
//     height: 100px;
//     top: 120px;
//     justify-content: space-between;
// `;

// export const Jobbtn = styled.TouchableOpacity `
//     width: 123px;
//     height: 43px;
//     background-color: ${teritary};
//     border-radius: 35px;
//     flex-direction: row;
//     text-align: center;
//     top: 30%
//     left: 55px;
//     background: #FFFFFF;
//     border: 1px solid #939393;
//     box-sizing: border-box;
//     border-radius: 35px;
// `;

// export const Jobtxt = styled.Text `
//     color: ${black};
//     font-family: ${Poppin};
//     font-size: 18px;
//     font-weight: 500;
//     font-style: normal;
//     left: 6px;
//     bottom: 3px;
//     text-align: center;
//     padding: 10px;
//     width: 112px;
//     height: 50px;
// `;

// export const Expcont = styled.View `
//     width: 200px;
//     height: 100px;
//     top: 90px;
//     flex-direction: row;
//     justify-content: space-between;
// `;

// export const Expbox1 = styled.View `
//     width: 69px;
//     height: 49px;
//     border: 1px solid ${grey};
//     box-sizing: border-box;
//     border-radius: 8px;
//     left: 58px;
//     top: 60px;
// `;

// export const Exptxt1 = styled.TextInput `
//     width: 50px;
//     height: 50px;
//     font-family: Poppins;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 14px;
//     text-align: center;
//     line-height: 21px;
//     color: ${greyplaceholder};

// `;

// export const Expbox2 = styled.View `
//     width: 113px;
//     height: 49px;
//     border: 1px solid ${grey};
//     box-sizing: border-box;
//     border-radius: 8px;
//     left: 58px;
//     top: 60px;
// `;

// export const Exptxt2 = styled.TextInput `
//     width: 50px;
//     height: 50px;
//     font-family: Poppins;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 14px;
//     text-align: center;
//     line-height: 21px;
//     color: ${greyplaceholder};
// `;

// export const Descont = styled.View `
//     width: 200px;
//     height: 100px;
//     top: 90px;
//     flex-direction: row;
//     justify-content: space-between;
//     margin-top: 12px;
//     margin-left: 61px;
// `;

// export const Destxt1 = styled.Text `
//     width: 50px;
//     height: 18px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: normal;
//     font-size: 12px;
//     line-height: 18px;
//     color: ${black};
//     text-align: center;
// `;

// export const Destxt2 = styled.Text `
//     width: 50px;
//     height: 18px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: normal;
//     font-size: 12px;
//     line-height: 18px;
//     color: ${black};
//     text-align: center;
//     margin-right: 70px;
// `;

// export const Avatarcont = styled.View `
//     width: 206px;
//     height: 206px;
//     background: ${avatarbg};
//     border: 1px solid ${avatarbr};
//     box-sizing: border-box;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     border-radius: 500px;
//     margin-top: 16px;
//     margin-left: 104px;
// `;

// export const Uploadcont = styled.TouchableOpacity `
//     position: absolute;
//     background: ${primary};
//     border: 4px solid ${primary};
//     box-sizing: border-box;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     border-radius: 35px;
//     width: 230px;
//     height: 45px;
//     margin-top: 280px;
//     margin-left: 93px;
// `;

// export const Uploadbtn = styled.Text `
//     position: absolute;
//     width: 186px;
//     height: 27px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 27px;
//     color: ${white};
//     margin-top: 3px;
//     margin-left: 42px;
// `;

// export const Skillcont = styled.View `
//     flex-direction: row;
//     width: 300px;
//     height: 70px;
//     top: 120px;
//     justify-content: space-between;
// `;

// export const Skillbtn = styled.TouchableOpacity `
//     width: 127px;
//     height: 43px;
//     background-color: ${teritary};
//     border-radius: 35px;
//     flex-direction: row;
//     text-align: center;
//     bottom: 90%;
//     left: 55px;
//     background: #FFFFFF;
//     border: 1px solid #939393;
//     box-sizing: border-box;
//     border-radius: 35px;
// `;

// export const Skilltxt = styled.Text `
//     color: ${black};
//     font-family: ${Poppin};
//     font-size: 16px;
//     font-weight: 500;
//     font-style: normal;
//     right: 90%;
//     bottom: 3px;
//     text-align: center;
//     padding: 10px;
//     width: 200px;
//     height: 50px;
// `;

// export const Designationcont = styled.TouchableOpacity `
//     position: absolute;
//     flex-direction: row;
//     width: 329px;
//     height: 92px;
//     background: ${white};
//     border: 1px solid ${grey};
//     box-sizing: border-box;
//     border-radius: 35px;
//     margin-top: 80px;
//     margin-left: 42px;
//     background-color: ${primary}
// `;

// export const Designationimg = styled.Image `
//     width: 75px;
//     height: 65px;
//     margin-top: 10px;
//     margin-left: 63px;
// `;

// export const Designationtxt = styled.Text `
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 500;
//     font-size: 20px;
//     line-height: 30px;
//     text-align: center;
//     color: ${black};
//     margin-top: 28px;
//     margin-left: 20px;
// `;

// export const Descriptioncont = styled.View `
//     width: 323px;
//     height: 125px;
//     background: ${teritary};
//     border-radius: 35px;
//     margin-left: 41px;
//     margin-top: 20px;
// `;

// export const Descriptiontxt = styled.TextInput `
//     width: 288px;
//     height: 100px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 300;
//     font-size: 12px;
//     line-height: 18px;
//     color: ${grey2};
//     margin-left: 20px;
// `;

// export const Modecont = styled.TouchableOpacity `
//     flex-direction: row;
//     width: 184px;
//     height: 50px;
//     background: ${white};
//     border: 1px solid ${grey};
//     box-sizing: border-box;
//     border-radius: 35px;
//     top: 5%;
//     margin-top: 20px;
//     margin-left: 115px;
// `;

// export const Modeimg = styled.Image `
//     width: 31px;
//     height: 33px;
//     margin-top: 7px;
//     margin-left: 31px;
// `;

// export const Modetxt = styled.Text `
//     width: 70px;
//     height: 30px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 500;
//     font-size: 20px;
//     line-height: 30px;
//     text-align: center;
//     color: ${black};
//     margin-top: 8px;
//     margin-left: 8px;
// `;

// export const Profilecont = styled.View `
//     background: ${white};
//     padding-top: 200%;
// `;

// export const Profilepic = styled.Image `
//     position: absolute;
//     width: 142px;
//     height: 142px;
//     left: 136px;
//     top: 49px;
//     border-radius: 80px;
// `;

// export const Username = styled.Text `
//     position: absolute;
//     margin-top: 220px;
//     margin-left: 100px;
//     color: ${black};
//     font-family: ${Poppins};
//     font-style: normal;
//     font-weight: 600;
//     font-size: 24px;
//     line-height: 36px;
// `;

// export const Profiledesg = styled.Text `
//     position: absolute;
//     width: 200.19px;
//     height: 19px;
//     margin-top: 260px;
//     margin-left: 115px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 21px;
//     color: ${black}
// `;

// export const Requestbtncont = styled.TouchableOpacity `
// position: absolute;
// width: 151px;
// height: 42px;
// border: 1px solid #939393;
// box-sizing: border-box;
// border-radius: 20px;
// margin-top: 310px;
// margin-left: 34px;
// background: ${white};
// border-color: ${black}
// border-radius: 20px;
// `;

// export const Requestbtntext = styled.Text `
//     position: absolute;
//     left: 25%;
//     right: 10.03%;
//     top: 16.05%;
//     bottom: 16.67%;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 27px;
//     text-transform: capitalize;
//     color: ${black};
// `;

// export const Messagebtncont = styled.TouchableOpacity `
//     position: absolute;
//     width: 151px;
//     height: 42px;
//     border: 1px solid #939393;
//     box-sizing: border-box;
//     border-radius: 20px;
//     margin-top: 310px;
//     margin-left: 230px;
//     background: ${white};
//     border-color: ${black}
//     border-radius: 20px;
// `;

// export const Messagebtntext = styled.Text `
//     position: absolute;
//     left: 10%;
//     right: 10.03%;
//     top: 16.05%;
//     bottom: 16.67%;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 27px;
//     text-transform: capitalize;
//     color: ${black};
//     text-align: center;
// `;

// export const Profiledecrpcont = styled.Text `
//     position: absolute;
//     width: 351px;
//     height: 80px;
//     left: 33px;
//     top: 390px;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 300;
//     font-size: 14px;
//     line-height: 21px;
//     color: ${black};
//     background: ${white};
// `;

// export const Userrecordcont = styled.View `
//     width: 100%;
//     height: 5%;
//     margin-top: 311px;
//     background: ${white};
// `;

// export const Experience = styled.Text `
//     width: 70px;
//     bottom: 600px;
//     margin-top: 110px;
//     left: 22px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 18px;
//     color: ${grey2};
//     background: ${white};
// `;

// export const Explevel = styled.Text `
//     position: absolute;
//     margin-top: 313px;
//     left: 8%;
//     font-family: ${Poppins};
//     font-style: normal;
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 21px;
//     text-transform: capitalize;
//     color: ${black};
// `;

// export const Rating = styled.Text `
//     width: 30px;
//     height: 18px;
//     bottom: 191%;
//     left: 37%;
//     font-family: ${Poppins};
//     font-style: normal;
//     font-weight: 600;
//     font-size: 15px;
//     line-height: 21px;
//     text-transform: capitalize;
//     color: ${black};
// `;

// export const Projects = styled.Text `
//     width: 80px;
//     height: 21px;
//     bottom: 212%;
//     left: 57%;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 21px;
//     color: ${project};
// `;

// export const Hours = styled.Text `
//     width: 70px;
//     bottom: 820px;
//     margin-top: 110px;
//     left: 330px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 18px;
//     color: ${grey2};
//     background: ${white};
// `;

// export const Charges = styled.Text `
// bottom: 261%;
// left: 82%;
// font-family: ${Poppins};
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 21px;
// text-transform: capitalize;
// color: ${black};
// `;

// export const Profilediv = styled.View `
//     height: 4px;
//     width: 200%;
//     background-color: ${teritary};
//     bottom: 348px;
// `;

// export const Skill = styled.Text `
//     width: 100px;
//     height: 30px;
//     font-family: ${Poppins};
//     font-style: normal;
//     font-weight: 600;
//     font-size: 20px;
//     line-height: 30px;
//     text-align: center;
//     color: ${black};
//     left: 165px;
//     bottom: 330px;
// `;

// export const Customswitch = styled.View `
//     height: 44;
//     width: 100%;
//     bottom: 100%;
//     background: '#e4e4e4';
//     border-radius: 10;
//     border-color: '#AD40AF';
//     flex-direction: 'row';
//     justify-content: 'center';
// `;

// export const Customswitchcont = styled.View `
//     width: 300px;
//     // height: 300px;
//     flex-direction: 'row;
// `;

// export const Skillscont = styled.View `
//     flex-direction:'row';
//     justify-content: 'space-between';
//     align-items: 'center';
//     margin-bottom: 20;
// `;

// export const Skillimgcont = styled.View `
//     flex-direction: 'row';
//     align-items: 'center';
//     flex: 1;
//     width: 130px;
//     height: 130px;
//     left: 48px;
//     top: 439px;
//     border-radius: 15px;
// `;

// export const Skillimg = styled.Image `
//     width: 55;
//     height: 55;
//     borderRadius: 10;
//     marginRight: 8;
// `;

// export const Bottombtncont = styled.TouchableOpacity`
//     width: 181px;
//     height: 44px;
//     background: ${teritary};
//     border-radius: 24px;
//     top: 600px;
//     left: 115px;
// `;

// export const Bottombtntxt = styled.Text `
//     text-align: center;
//     top: 10px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 21px;
//     text-transform: capitalize;
//     color: ${black}
// `;

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

export const Skillcont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const Skillsearchcont = styled.View`
  flex-direction: row;
  background: ${white};
  border: 1px solid ${black};
  box-sizing: border-box;
  border-radius: 35px;
  width: 300px;
  height: 50px;
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
`;

// export const Discriptioncont = styled.View`
//     width: 500px;
//     height: 25px;
// `;

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

export const Headercont = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 500px;
  height: 170px;
  margin-left: 25px;
`;

export const Formtxt2 = styled.Text`
  font-family: ${Poppin};
  font-size: 16px;
  color: ${black};
  top: 6%;
  left: 55px;
  font-weight: 500;
`;

export const Cont = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Txtcont = styled.View`
  width: 62px;
  height: 35px;
`;

export const Searchcont = styled.View`
  width: 323px;
  height: 50px;
  background-color: ${white};
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
`;

export const Searchtxt = styled.TextInput`
  font-size: 12px;
  font-family: ${Poppin};
  width: 300px;
`;

export const Nxtcont = styled.View`
  width: width;
  height: height;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;
`;

export const Skillscont = styled.View`
  flex-direction: 'row';
  justify-content: 'space-between';
  align-items: 'center';
  margin-bottom: 20;
`;

export const Skillcont2 = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;
export const Skillsearchcont2 = styled.View`
  flex-direction: row;
  background: ${white};
  border: 0px solid ${black};
  box-sizing: border-box;

  height: 51px;
  width: 325px;

  border-radius: 15px;
  position: absolute;
  left: 6.76%;
  right: 9%;
  top: 100;
  bottom: 41.85%;
`;

export const Skillsearchcont3 = styled.View`
  flex-direction: row;
  background: ${white};
  border: 0px solid ${black};
  box-sizing: border-box;

  height: 51px;
  width: 325px;
  font-color: '#FFFFFF';
  border-radius: 15px;
  background: #00a8e8;
  position: absolute;
  left: 6.76%;
  right: 7%;
  top: 43.64%;
  bottom: 50.67%;
`;
export const Skillinp2 = styled.TextInput`
  width: 200px;
  font-family: ${Poppin};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: ${search};
  margin-left: 22px;
`;

export const Discriptiontxt2 = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${discrip};
  width: 340px;
  height: 21px;
  left: 5%;
  top: 300%;
`;
export const Discriptiontxt3 = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${discrip};
  text-transform: capitalize;
  width: 370px;
  height: 42px;
  left: 5%;
  top: 300%;
  line-height: 21px;
`;

export const PyHomeLocation = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  left: 31;
  bottom: 15;
`;

// export const Skillbtncont = styled.View`
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     flex-wrap: wrap;
//     margin-top: 10px;
//     margin-left: 10px;
// `;



// export const Skillbtntxt = styled.Text`
// font-family: ${Poppin};
// font-style: normal;
// font-weight: 500;
// font-size: 16px;
// line-height: 24px;
// color: ${black};
// `;

// export const Skillcont = styled.View`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-content: center;
// `;

// export const Skillsearchcont = styled.View `
//     flex-direction: row;
//     background: ${white};
//     border: 1px solid ${black};
//     box-sizing: border-box;
//     border-radius: 35px;
//     width: 300px;
//     height: 50px;
// `;

// export const Skillinp = styled.TextInput `
//     width: 200px;
//     font-family: ${Poppin};
//     font-style: normal;
//     font-weight: normal;
//     font-size: 18px;
//     line-height: 27px;
//     color: ${search};
//     margin-left: 22px;
// `;

export const Skillbtncont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Skillbtntxt = styled.Text`
  font-family: ${Poppin};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${black};
`;
