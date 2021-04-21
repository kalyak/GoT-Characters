import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {DataTable} from 'react-native-paper';

const DetailTable = ({character}) => {
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

  return (
    <DataTable style={styles.container}>
      {Object.keys(character).map((detail, index) => {
        return (
          <DataTable.Row>
            <DataTable.Cell style={styles.key}>{detail}: </DataTable.Cell>
            <DataTable.Cell>
              {character[detail] ? (
                character[detail]
              ) : (
                <Text style={styles.unknown}>Unknown</Text>
              )}
            </DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
};

export default DetailTable;
