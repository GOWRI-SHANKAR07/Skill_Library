import React from 'react';

// KeyboardAvoidingView
import {KeyboardAvoidingView, View, TouchableWithoutFeedback, Keyboard} from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView>
            <View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper;