import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const CharDetails = ({navigation, route}) => {
  const {character, index} = route.params;
  const imgURL = `https://picsum.photos/id/${index}/300/200`;

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    image: {
      width: 300,
      height: 200,
    },
  });

  const renderItem = ({item}) => (
    <View style={styles.container}>
      {' '}
      <Text>{item}</Text>
      {/* <Text>Name: {item.name}</Text>
      <Text>Gender: {item.gender}</Text>
      <Text>Culture: {item.culture}</Text>
      <Text>Born: {item.born}</Text>
      <Text> Died: {item.died}</Text>
      <Text>Titles: ['']</Text>
      <Text>aliases: ['Hodor']</Text>
      <Text>father: {item.father}</Text>
      <Text>mother: {item.mother}</Text>
      <Text>spouse: {item.spouse}</Text>
      <Text>allegiances: ['https://anapioficeandfire.com/api/houses/362']</Text>
      <Text>
        books: [ 'https://anapioficeandfire.com/api/books/1',
        'https://anapioficeandfire.com/api/books/2',
        'https://anapioficeandfire.com/api/books/3',
        'https://anapioficeandfire.com/api/books/5',
        'https://anapioficeandfire.com/api/books/8', ]
      </Text>
      <Text>povBooks: []</Text>
      <Text>
        tvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 6']
      </Text>
      <Text>playedBy: ['Kristian Nairn']</Text> */}
    </View>
  );

  return (
    <View>
      <Image style={styles.image} source={{uri: imgURL}} />
      <FlatList
        data={character}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
      <Text>Name text: {character.name}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Culture: {character.culture}</Text>
      <Text>Born: {character.born}</Text>
      <Text> Died: {character.died}</Text>
      <Text>Titles: ['']</Text>
      <Text>aliases: ['Hodor']</Text>
      <Text>father: {character.father}</Text>
      <Text>mother: {character.mother}</Text>
      <Text>spouse: {character.spouse}</Text>
      <Text>allegiances: ['https://anapioficeandfire.com/api/houses/362']</Text>
      <Text>
        books: [ 'https://anapioficeandfire.com/api/books/1',
        'https://anapioficeandfire.com/api/books/2',
        'https://anapioficeandfire.com/api/books/3',
        'https://anapioficeandfire.com/api/books/5',
        'https://anapioficeandfire.com/api/books/8', ]
      </Text>
      <Text>povBooks: []</Text>
      <Text>
        tvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 6']
      </Text>
      <Text>playedBy: ['Kristian Nairn']</Text>
    </View>
  );
};

export default CharDetails;
