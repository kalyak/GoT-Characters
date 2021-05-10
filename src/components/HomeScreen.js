import React from 'react';
import {Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Game of Thrones List"
      onPress={() => navigation.navigate('Character List')}
    />
  );
};

export default HomeScreen;
