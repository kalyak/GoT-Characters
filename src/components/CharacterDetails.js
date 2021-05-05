import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import DetailTable from './DetailTable';

const CharDetails = ({navigation, route}) => {
  const character = route.params.character;
  const imgURL = route.params.imgURL + '/300/200';

  const styles = StyleSheet.create({
    container: {
      // paddingHorizontal: 5,
      // paddingTop: 110,
      paddingBottom: 10,
      justifyContent: 'center',
      // position: 'relative',
      flex: 1,
      borderColor: 'red',
      borderWidth: 5,
    },
    image: {
      alignSelf: 'center',
      width: 300,
      height: 200,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imgURL}} />
      <DetailTable character={character} />
    </View>
  );
};

export default CharDetails;
