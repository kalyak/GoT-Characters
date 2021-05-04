import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacters} from '../redux/actions';
// import Characters from '../api/Characters';

const CharList = ({navigation}) => {
  // const characters = Characters;
  // const [count, setCount] = useState(0);

  const {characters} = useSelector(state => state.charReducer);
  const dispatch = useDispatch();
  const fetchChars = () => dispatch(getCharacters());

  useEffect(() => {
    fetchChars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item, index}) => {
    const imgURL = `https://picsum.photos/id/${index}`;
    return (
      <TouchableOpacity
        onPress={() => {
          // setCount(count + 1);
          navigation.navigate('Character Details', {
            character: item,
            imgURL,
          });
        }}>
        <View
        // style={{height: 100, width: '100%', backgroundColor: 'rgba(1,0,0,0.5'}}
        >
          <Text>
            {index}:{' '}
            {item.name ? item.name + ' AKA ' + item.aliases : item.aliases}
          </Text>
          <Image style={styles.thumbnail} source={{uri: `${imgURL}/300/200`}} />
          {/* <Text>{`https://picsum.photos/id/${index}/50`}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    thumbnail: {
      width: 50,
      height: 50,
    },
    separator: {
      height: 10,
      width: '100%',
      backgroundColor: 'rgba(230,230,230,1)',
    },
  });

  // const count = []
  return (
    <View style={styles.container}>
      {/* {characters.length === 0 ? (
        'Loading'
      ) : ( */}
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={character => character.url}
        ItemSeparatorComponent={ItemSeparator}
      />
      {/* )} */}
      {/* <Text>Count: {count}</Text> */}
      <Text>Characters: {characters.length}</Text>
    </View>
  );
};

export default CharList;
