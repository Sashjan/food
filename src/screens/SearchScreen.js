import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBuisnesses';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const[term, setTerm] = useState(''); //piece of state, managed by SearchScreen;
  const[searchApi, business, errorMessage] = useBusinesses();
  
//The block of code below is called JSX block.
  return <View>
    <SearchBar 
      term={term} 
      onTermChange={setTerm}
      //passing down that piece of state -> term={term} and a way -> onTermChange={(newTerm) => {setTerm(newTerm)} 
      //or we can short it to just onTermChange={setTerm}
      //to change it down to the child SearchBar element; then we need to show up these 
      //to properties (term and onTermChange) inside of our props object -> see SearchBar
      onTermSubmit={() => searchApi(term)}
    />
    { errorMessage ? <Text>{errorMessage}</Text> : null }
    <Text>We have found {business.length} results</Text>
    <ResultsList title="Cost Effective"/>
    <ResultsList title="Bit Pricier"/>
    <ResultsList title="Big Spender"/>
  </View>  
};

const styles = StyleSheet.create({});

export default SearchScreen;

//term - means expression;