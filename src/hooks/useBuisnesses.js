import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {

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

  return [searchApi, business, errorMessage];
};