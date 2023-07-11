import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import { Container, SearchBoxCont } from '../styles/SearchBox';
import { Skillcont, Skillinp, Skillsearchcont2 } from '../styles/SkillSelect';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors, Fonts } from '../Constants/Theme';
import { windowHeight, windowWidth } from '../utils/Dimension';

const SearchBox = () => {

    const [text, setText] = useState('');

    const textHandler = (val) => {
        setText(val);
    }

    const textClearHandler = () => {
        setText('');
    }

    

    return (
        <View style={{ paddingTop: 15 }}>
            <Skillcont>
                <Skillsearchcont2 style={{ elevation: 3 }}>
                    <AntDesign
                        style={{ marginTop: 12, marginLeft: 26 }}
                        name="search1"
                        size={20}
                        color={Colors.primary}
                    />
                    <Skillinp
                        value={text}
                        placeholder="Try logo Designer"
                        placeholderTextColor={Colors.greyplaceholder}
                        onChangeText={textHandler}
                    />
                    <TouchableOpacity
                        onPress={textClearHandler}
                    >
                        <Entypo
                            name='chevron-thin-right'
                            size={20}
                            color={Colors.black}
                            style={{ marginTop: 12, marginLeft: 11, }}
                        />
                        <Entypo
                            name='chevron-thin-left'
                            size={20}
                            color={Colors.black}
                            style={{ marginTop: -20.5, marginLeft: 20, }}
                        />
                    </TouchableOpacity>
                </Skillsearchcont2>
            </Skillcont>
<View style={{justifyContent:'center', alignItems:'center', marginTop: 15}} >
            <TouchableNativeFeedback>
          <View style={{     backgroundColor: Colors.primary,
        padding: 13,
        borderRadius: 15,
        width: windowWidth * 0.30,
        justifyContent:'center',
        alignItems: 'center'
        }}>

        <Text style={{color: Colors.white, fontFamily: Fonts.PoppinsMedium}} >Search</Text>
          </View>
      </TouchableNativeFeedback>
      </View>
        </View>
    );
}

export default SearchBox;