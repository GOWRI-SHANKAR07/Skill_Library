import React from 'react';
import { Button, TouchableOpacity, View,  } from 'react-native';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';


const ToggleButton = (type, isSelected, setIsSelected) => {

    const buttonHandler = () => {
        setIsSelected(type);
        if(onClickEvent !== null)
        onClickEvent(isSelected);
        console.log(type)
    }

    return(
        <View>
       <Button  rounded  onPress={() => buttonHandler()}>
      </Button>
    </View>
    );
};

export default ToggleButton;