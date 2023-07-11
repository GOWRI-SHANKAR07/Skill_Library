import React from 'react';
import { View } from 'react-native';
import BottomPopup from './BottomPopup';

const Add = () => {
    return (
        <View>
            <BottomPopup>
                <View
                    style={{
                        width: '100%',
                        height: '50%',
                        marginTop: 'auto',
                        borderColor: '#ccc',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        backgroundColor: 'white',
                        elevation: 20,
                        padding: 10,
                        borderRadius: 4,
                    }}>
                    <Text>Hello </Text>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Hide</Text>
                    </Pressable>
                </View>
            </BottomPopup>
        </View>
    )
}

export default Add;