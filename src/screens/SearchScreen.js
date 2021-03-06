import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const[term, setTerm] = useState(''); //piece of state, managed by SearchScreen;
  const[searchApi, restaurants, errorMessage] = useRestaurants();
  
  const filterRestaurantsByPrice = (price) => {
    //price === $ || $$ || $$$
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };
  
//The block of code below is called JSX block.
  return <View style={{flex: 1}}>{/*or we can use just empty <>less than grater than 
    element</> without needless of using the flex property*/}
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
    <ScrollView>
    <ResultsList results={filterRestaurantsByPrice('$')} title="Cost Effective"/>
    <ResultsList results={filterRestaurantsByPrice('$$')} title="Bit Pricier"/>
    <ResultsList results={filterRestaurantsByPrice('$$$')} title="Big Spender"/>
    </ScrollView>
  </View>  
};

const styles = StyleSheet.create({});

export default SearchScreen;

//term - means search expression;