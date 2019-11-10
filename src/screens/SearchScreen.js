import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const[term, setTerm] = useState(''); //piece of state, managed by SearchScreen;
  const[business, setBusiness] = useState([]);
  const[errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hi, There!');
    try{
      const response = await yelp.get('/search', {
          params: {
          limit: 50,
          term: searchTerm, //because of term: term we use ES2015 syntax and just write down single term  
          location: 'san jose'
          }  
      });
      setBusiness(response.data.businesses);
    } catch (err) {
        setErrorMessage('Something went wrong');
    }
  };
  //searchApi('pasta');
// Call searchApi when component is first rendered.
//This is BAD CODE! Don't do that because it creates 
//an infinite loop(infinite screen rendering, i.e UPDATED STATE 
//CAUSES COMPONENT TO RERENDER) meaning it calls SearchScreen function again and again.
useEffect(() => {
  searchApi('pasta');
}, []);

//The block of code below is called JSX block.
  return <View>
    <SearchBar 
      term={term} 
      onTermChange={() => setTerm(term)}
      //passing down that piece of state -> term={term} and a way -> onTermChange={(newTerm) => {setTerm(newTerm)} 
      //or we can short it to just onTermChange={setTerm}
      //to change it down to the child SearchBar element; then we need to show up these 
      //to properties (term and onTermChange) inside of our props object -> see SearchBar
      onTermSubmit={searchApi}
    /> 
    { errorMessage ? <Text>{errorMessage}</Text> : null }
    <Text>We have found {business.length} results</Text> 
  </View>  
};

const styles = StyleSheet.create({});

export default SearchScreen;


//term - means expression;