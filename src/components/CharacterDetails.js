import React from 'react';
import {Image, Text, View} from 'react-native';

const CharDetails = ({navigation, route}) => {
  const Character = route.params.item;

  return (
    <View>
      <Image />
      <Text>Name: {Character.name}</Text>
    </View>
  );
};

export default CharDetails;
