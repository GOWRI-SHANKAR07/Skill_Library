import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import babelConfig from '../babel.config';

export const LoadingIndicator = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <ActivityIndicator size='large' />
        </View>
    )
} 