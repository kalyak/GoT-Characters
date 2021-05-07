import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacters} from '../redux/actions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
          navigation.navigate('Character Details', {
            character: item,
            imgURL,
          });
        }}>
        <View
          style={styles.row}
          // style={{height: 100, width: '100%', backgroundColor: 'rgba(1,0,0,0.5'}}
        >
          <Image style={styles.thumbnail} source={{uri: `${imgURL}/300/200`}} />
          <Text style={styles.text}>{index + 1}: </Text>
          <Text style={styles.text}>
            {item.name ? item.name + ' AKA ' + item.aliases : item.aliases}
          </Text>
          <MaterialIcons
            // style={styles.arrow}
            color="black"
            name="chevron-right"
            size={32}
          />
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
      // borderColor: 'red',
      // borderWidth: 5,
      flex: 1,
    },
    list: {
      // borderLeftWidth: 1,
      // borderRightWidth: 1,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      // alignContent: 'space-between',
      // borderTopWidth: 1,
      // borderBottomWidth: 1,
      borderWidth: 1,
    },
    thumbnail: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    separator: {
      height: 10,
      width: '100%',
      backgroundColor: 'rgba(230,230,230,1)',
      // borderLeftWidth: 1,
      // borderRightWidth: 1,
    },
    text: {
      fontWeight: 'bold',
      // borderWidth: 1,
    },
    // arrow: {
    //   alignSelf: 'stretch',
    // },
    loading: {
      flex: 1,
      justifyContent: 'center',
    },
  });

  // const count = []
  return (
    <View style={styles.container}>
      {characters.length === 0 ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" hidesWhenStopped={true} />
        </View>
      ) : (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={character => character.url}
          ItemSeparatorComponent={ItemSeparator}
          style={styles.list}
        />
      )}
      {/* <Text>Count: {count}</Text> */}
    </View>
  );
};

export default CharList;
