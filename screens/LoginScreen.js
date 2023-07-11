import React from 'react';
import { StatusBar } from 'react-native';
// import { View, Text,  } from 'react-native';
import { Container, Content, Googlelogo, InnerCont, Signinbtn, Signintxt, SubTxt, Text } from '../styles/Base-Component';
import FontAwesome from "react-native-vector-icons/FontAwesome"
// import GoogleSignUp from '../Auth/GoogleAuth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import axios from 'axios';

const LoginScreen = () => {

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:  "933540295643-sd740dc1fkr1jgq772k4vbed9t4a3bam.apps.googleusercontent.com", 
      offlineAccess: true
    });
  }, [])
  
    const GoogleSignUp = async () => {
      
      
      try {
        await GoogleSignin.hasPlayServices();
        await GoogleSignin.signIn().then((result) => { 
          console.log(result); 
          try {
            axios.post('http://192.168.43.112:3000/google/verify', result).then(res => {
              console.log(res.data);
            });
          } catch (error) {
            console.log(error);
          }
        }
        );
        
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          alert('User cancelled the login flow !');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress');
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('Google play services not available or outdated !');
          // play services not available or outdated
        } else {
          console.log(error)
        }
      }
    };
  
  return (
        <Container >
            <StatusBar backgroundColor='#00A8E8' barStyle="light-content"/>
            <InnerCont>
                <Text>AHB Jobs</Text>
                <SubTxt>Unlock the best</SubTxt>
            </InnerCont>
            <Content>
              <Signinbtn onPress={GoogleSignUp}>
                <FontAwesome name='google' size={30} style={{textAlign: 'center', marginTop: 9, marginLeft:60,}} />
                <Signintxt>Login with Google</Signintxt>
              </Signinbtn>
            </Content>  
        </Container>
    
  );
}



export default LoginScreen;


// import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native'
// import React from 'react'
// import { 
//   Heading,
//   Skillsearchcont,
//   Skillinp,
//   Skillcont,
//   Discriptiontxt,
//   Headercont,
//   Skillbtntxt,
//   Skillbtncont,
// } from '../styles/SkillSelect';

// import {windowWidth, windowHeight} from '../utils/Dimension';
// import  { Component } from 'react'
// import { Card } from 'react-native-paper';
// import FormNextButton from '../components/buttons/FormNextButton';

// import AntDesign from 'react-native-vector-icons/AntDesign';


// export default class SkillScreen extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       selectedItem : null
//     };
//   }

//   onPressHandler(id) {
//     this.setState({selectedItem: id});
//     const skills = {id}
//     console.log(skills);
//   }

//   render() {

//     const skill = [
//         { skill: 'Programmer', id: '1' },
//         { skill: 'Web Developer', id: '2' },
//         { skill: 'Node JS', id: '3' },
//         { skill: 'React JS', id: '4' },
//         { skill: 'React Native', id: '5' },
//         { skill: 'Adobe Illustrator', id: '6' },
//         { skill: 'After Effects', id: '7' },
//         { skill: 'Python Developer', id: '8' },
//         { skill: 'PhotoShop', id: '9' },
//         { skill: 'JavaScipt', id: '10' },
//         { skill: 'WordPress Developer', id: '11' },
//         { skill: 'MongoDB', id: '12' },
//         { skill: 'Software Testing', id: '13' },
      
//     ]
//     return (
//       <View style={styles.container}>
//         <View>
//           <TouchableOpacity onPress={() => navigation.navigate('Location')}
//             style={styles.back}
//           >
//             <AntDesign
//               name='arrowleft'
//               size={25}
//               style={styles.arrow}
//             />
//           </TouchableOpacity>
//         </View>
//         <Headercont>
//           <Heading>Select Your Skill !</Heading>
//           <Discriptiontxt>Select your top 3 Skills</Discriptiontxt>
//         </Headercont>
//         <View>
//         <Skillcont>
//           <Skillsearchcont>
//             <AntDesign 
//               style={styles.search}
//               name='search1' 
//               size={20} 
//               color='#717070'
//             />
//             <Skillinp 
//               placeholder='Search Your Skill'
//             />
//           </Skillsearchcont>
//         </Skillcont>
//         <Text></Text>
//       </View>
//       <View style={styles.btncont}>
//             <FlatList 
//               extraData={this.state.selectedItem} //Must implemented
//               numColumns={3}
//               keyExtractor={(item) => item.id.toString()}
//               data={skill}
//               renderItem={({item}) => (
//                 <View>
//                   <TouchableOpacity
//                     onPress={() => this.onPressHandler(item.skill)}
//                   >
//                     <Card
//                       style={this.state.selectedItem === item.skill ? {
//                         borderRadius: 5,
//                         backgroundColor: 'blue',
//                         color: 'black',
//                         padding: 10,
//                         borderColor: 'black',
//                         borderWidth: 1,
//                         margin: 5,
//                         borderRadius: 15,
//                         } : 
//                         {
//                           borderRadius: 5, 
//                           backgroundColor: "white",
//                           padding: 10,
//                           borderColor: 'black',
//                           borderWidth: 1,
//                           margin: 5,
//                           borderRadius: 15,
//                         }}
//                     >
//                       <Text 
//                         // style={styles.item}
//                         // style={{
//                           // padding: 10,
//                           // borderColor: 'black',
//                           // borderWidth: 1,
//                           // color: 'black',
//                           // padding: 10,
//                           // margin: 10,
//                           // borderRadius: 15,
//                         // }}
//                         style={this.state.selectedItem === item.skill ? {
//                           borderRadius: 5,
//                           backgroundColor: 'blue',
//                           color: 'white',
//                           } : 
//                           {
//                             borderRadius: 5, 
//                             backgroundColor: "white",
//                             color: 'black',

//                           }}
//                       >{item.skill}
//                       </Text>
//                     </Card>
//                   </TouchableOpacity>
//                 </View>
//               )}
//             />
//       </View>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'flex-end',
//           alignItems: 'flex-end',
//         }}>
//         <TouchableOpacity onPress={() => navigation.navigate('Names')}>
//           <FormNextButton />
//         </TouchableOpacity>
//       </View>
//       </View>
//     )
//   }
// }

// const SkillScreen = ({navigation}) => {

// const [skill, setSkill] = useState([
//   { skill: 'Programmer', id: '1' },
//   { skill: 'Web Developer', id: '2' },
//   { skill: 'Node JS', id: '3' },
//   { skill: 'React JS', id: '4' },
//   { skill: 'React Native', id: '5' },
//   { skill: 'Adobe Illustrator', id: '6' },
//   { skill: 'After Effects', id: '7' },
//   { skill: 'Python Developer', id: '8' },
//   { skill: 'PhotoShop', id: '9' },
//   { skill: 'JavaScipt', id: '10' },
//   { skill: 'WordPress Developer', id: '11' },
//   { skill: 'MongoDB', id: '12' },
//   { skill: 'Software Testing', id: '13' },

// ])

// // const Skills = [
// //   "Programmer", 
// //   "Web Developer", 
// //   "Designer", 
// //   "Node JS", 
// //   "React JS",
// //   "PhotoShop",
// //   "Adobe Illustrator",
// //   "Android Developer",
// //   "JavaScript",
// //   "WordPress Developer",
// //   "Python",
// // ];

// // const skill1 = Skills[0];
// // const skill2 = Skills[1];
// // const skill3 = Skills[2];
// // const skill4 = Skills[3];
// // const skill5 = Skills[4];
// // const skill6 = Skills[5];
// // const skill7 = Skills[6];
// // const skill8 = Skills[7];
// // const skill9 = Skills[8];
// // const skill10 = Skills[9];
// // const skill11= Skills[10];
// const length = console.log(windowHeight)

// const [selected, setSelected] = useState(false);
//     return (
//       <View style={styles.container}>
//         <View>
//         <TouchableOpacity onPress={() => navigation.navigate('Location')}
//           style={styles.back}
//         >
//           <AntDesign
//             name='arrowleft'
//             size={25}
//             style={styles.arrow}
//           />
//         </TouchableOpacity>
        
//         </View>
//         <Headercont>
//           <Heading>Select Your Skill !</Heading>
//           <Discriptiontxt>Select your top 3 Skills</Discriptiontxt>
//         </Headercont>
//         <View>
//         <Skillcont>
//           <Skillsearchcont>
//             <AntDesign 
//               style={styles.search}
//               name='search1' 
//               size={20} 
//               color='#717070'
//             />
//             <Skillinp 
//               placeholder='Search Your Skill'
//             />
//           </Skillsearchcont>
//         </Skillcont>
//         <Text></Text>
//       </View>
//       <View style={styles.btncont}>
//       {/* <Skillbtncont style={styles.bntinnr}>
//         <TouchableOpacity style={styles.btn}> */}
//           {/* <Skillbtntxt> */}
            // <FlatList 
            //   numColumns={3}
            //   keyExtractor={(item) => item.id}
            //   data={skill}
            //   renderItem={({item}) => (
            //     <View>
            //       <TouchableOpacity
            //         onPress={() => setSelected(!selected)}
            //       >
            //         <Text 
            //         // style={styles.item}
            //         style={{
            //           backgroundColor: selected ? 'blue' : 'white',
            //           padding: 10,
            //           borderColor: 'black',
            //           borderWidth: 1,
            //           color: 'black',
            //           padding: 10,
            //           margin: 10,
            //           borderRadius: 15,
            //         }}
            //         >{item.skill}</Text>
            //       </TouchableOpacity>
            //     </View>
            //   )}
            // />
//           {/* </Skillbtntxt> */}
//         {/* </TouchableOpacity> */}
//         {/* <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill1}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill2}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill3}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill4}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill5}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill6}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill7}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill8}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill9}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill10}</Skillbtntxt>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//           <Skillbtntxt>{skill11}</Skillbtntxt>
//         </TouchableOpacity> */}
//       {/* </Skillbtncont> */}
//       </View>
//       <Text>{length}</Text>
      // <View style={styles.Nxtcont}>
      //       <TouchableOpacity
      //         style={styles.Nxt}
      //         onPress={() => navigation.navigate('Names')}
      //       >
      //       <AntDesign 
      //           name='arrowright'
      //           size={50}
      //           color= '#fff'
      //       />
      //       </TouchableOpacity>
      //   </View>
//       </View>
      
//     )
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     width: windowWidth,
//     height: windowHeight,
//     padding: 20,
//   },

//   search: {
//     marginTop: 12,
//     marginLeft: 26,
//   },


//   back: {
//     marginLeft: 22,
//     marginTop: 22,
//     display: 'flex',
//     backgroundColor: '#fff',
//     color: '#000',
//     borderRadius: 50,
//     borderWidth: 1,
//     borderColor: '#D1F2FF',
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   Nxtcont: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'flex-end',
//     marginHorizontal: windowWidth - 12,
//     marginVertical: windowHeight - 680,
// },

// Nxt: {
//     backgroundColor: '#00A8E8',
//     color: '#fff',
//     borderRadius: 50,
//     width: 82,
//     height: 82,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: windowWidth-380,
//     marginVertical: windowHeight+250,
//     bottom: windowHeight - 800,
// },

// btn: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     borderWidth: 2,
//     borderColor: '#0051',
//     margin: 10,
//     padding: 7,
// },

// btncont: {
//   display: 'flex',
//   alignItems: 'center',
//   j9999ustifyContent: 'center',
//   width: windowWidth - 30,
// },

// bntinnr: {
//   width: windowWidth + 20,
// },





// });