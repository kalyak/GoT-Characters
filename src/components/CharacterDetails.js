import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import DetailTable from './DetailTable';

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
    key: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
      width: '20%',
    },
    unknown: {
      color: 'red',
    },
  });

  const ObjectList = () => {
    return Object.keys(character).map((item, index) => (
      <Text key={index}>
        <Text style={styles.key}>{item}: </Text>
        {character[item] ? (
          character[item]
        ) : (
          <Text style={styles.unknown}>Unknown</Text>
        )}
      </Text>
    ));
  };

  return (
    <View>
      <Image style={styles.image} source={{uri: imgURL}} />
      {/* <ObjectList /> */}
      <DetailTable character={character} />
    </View>
  );
};

export default CharDetails;
