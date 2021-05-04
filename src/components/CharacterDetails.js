import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import DetailTable from './DetailTable';

const CharDetails = ({navigation, route}) => {
  const character = route.params.character;
  const imgURL = route.params.imgURL + '/300/200';

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'center',
    },
    image: {
      width: 300,
      height: 200,
    },
  });

  return (
    <View>
      <Image style={styles.image} source={{uri: imgURL}} />
      <DetailTable character={character} />
    </View>
  );
};

export default CharDetails;
