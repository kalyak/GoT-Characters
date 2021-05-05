import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {DataTable} from 'react-native-paper';

const DetailTable = ({character}) => {
  const styles = StyleSheet.create({
    container: {
      // padding: 20,
      flex: 1,
      borderColor: 'blue',
      borderWidth: 5,
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

  const renderItem = ({item}) => (
    <DataTable.Row>
      <DataTable.Cell>
        <Text style={styles.key}>{item}: </Text>
      </DataTable.Cell>
      <DataTable.Cell>
        {character[item] ? (
          character[item]
        ) : (
          <Text style={styles.unknown}>Unknown</Text>
        )}
      </DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <DataTable style={styles.container}>
      <FlatList
        keyExtractor={item => item}
        data={Object.keys(character)}
        renderItem={renderItem}
      />
    </DataTable>
  );
};

export default DetailTable;
