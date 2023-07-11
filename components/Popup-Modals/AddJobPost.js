import { View, Text, Modal, Pressable } from 'react-native'
import React , { useState } from 'react'

const AddJobPostPopup = () => {
  const [modalVisible,setModalVisible] = useState(false) 
  return (
    <View>
      <Modal animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={()=>setModalVisible(!modalVisible)}
      >
        <View>
            <Text>Hello World</Text>
            <Pressable 
            onPress={()=>setModalVisible(!modalVisible)}
            >
                <Text>Hide Modal</Text>
            </Pressable>
        </View>

      </Modal>
      <Pressable
      onPress={()=>setModalVisible(!modalVisible)}
      >
        <Text>Show modal</Text>
      </Pressable>
    </View>
  )
}

export default AddJobPostPopup