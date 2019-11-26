import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
  console.log(results);

  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal //equivalent to the row of 'horizontal={true}'.
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        return <ResultsDetail result={item} />;
      }}
    />
    </View>
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 8
  }
});

export default ResultsList;