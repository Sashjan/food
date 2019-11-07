import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const[term, setTerm] = useState(''); //piece of state, managed by SearchScreen;
  const[business, setBusiness] = useState([]);
  const[errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try{
      const response = await yelp.get('/search', {
          params: {
          limit: 50,
          term, //because of term: term we use ES2015 syntax and just write down single term  
          location: 'san jose'
          }  
      });
      setBusiness(response.data.businesses);
    } catch (err) {
        setErrorMessage('Something went wrong');
    }
  };

  return <View>
    <SearchBar 
      term={term} 
      onTermChange={setTerm}
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