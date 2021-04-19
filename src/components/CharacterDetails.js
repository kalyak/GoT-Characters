import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CharDetails = ({navigation, route}) => {
  const character = route.params.character;
  const imgURL = route.params.imgURL + '/300/200';

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    image: {
      width: 300,
      height: 200,
    },
    text: {
      textTransform: 'capitalize',
    },
  });

  return (
    <View>
      <Image style={styles.image} source={{uri: imgURL}} />
      {Object.keys(character).map((item, index) => (
        <Text>
          <Text key={index} style={styles.text}>
            {item}:
          </Text>
          <Text> {character[item]}</Text>
        </Text>
      ))}
    </View>
  );
};

export default CharDetails;
