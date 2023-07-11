import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {render} from 'react-dom';
import axios from 'axios';
import {APIURI} from '../Constants/APIconfigs';

// const data = [
//   {
//     id: 1,
//     name: 'logo',
//   },
//   {id: 2, name: 'logo1'},
//   {id: 3, name: 'logo2'},
//   {id: 4, name: 'logo2'},
// ];

const SelectSkill = () => {
  const [query, Setquery] = useState();
  const [data, SetData] = useState();

  useEffect(() => {
    axios
      .get(APIURI + `skillquery/${query}`)
      .then(res => {
        console.log(res.data);
        SetData(res.data.skillsArr);
      })
      .catch(e => {
        console.log(e);
      });
  }, [query]);

  const renderitem = item => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          border: 1,
          borderRadius: 15,
          padding: 10,
        }}>
        <Text style={{color: 'black'}}>{item.item.skills}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View>
        <TextInput onChangeText={text => Setquery(text)} />
      </View>

      <FlatList
        data={data}
        renderItem={renderitem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SelectSkill;
