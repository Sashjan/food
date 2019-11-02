import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const[term, setTerm] = useState(''); //piece of state, managed by SearchScreen;

  return <View>
    <SearchBar 
      term={term} 
      onTermChange={(newTerm) => {setTerm(newTerm)} }
      //passing down that piece of state -> term={term} and a way -> onTermChange={(newTerm) => {setTerm(newTerm)}
      //to change it down to the child SearchBar element; then we need to show up these 
      //to properties (term and onTermChange) inside of our props object -> see SearchBar
      onTermSubmit={() => console.log(term)}
    /> 
    <Text>Search Screen</Text> 
    <Text>{term}</Text> 
  </View>  
};

const styles = StyleSheet.create({});

export default SearchScreen;


//term - means expression;