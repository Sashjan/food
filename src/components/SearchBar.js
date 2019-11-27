import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => { //destructuring props object, taking two 
    // necessary props from and using them for managing TextInput.
  return (
  <View style={styles.backgroundStyle}>
    <Feather name='search' style={styles.iconStyle} />
    <TextInput
      autoCapitalize='none' //turn off automatic capitalization
      autoCorrect={false} //turn off auto correction
      style={styles.inputStyle} 
      placeholder='Search'
      value={term}
      onChangeText={(newTerm) => onTermChange(newTerm)} 
      //Could be shortened to onChangeText={onTermChange}
      //Now the InputText is going to be told-> value={term} what the exact value of  
      //it should be. And any time a user changes that text with the onChangeText callback 
      //we're going to call onTermChange wich is passed from SearchScreen parent component 
      //and we'll pass in the newTerm(the new string) that the user just entered.
      onEndEditing={onTermSubmit} //the shortened from onEndEditing={() => onTermSubmit()}
    />
  </View>  
  )};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 45,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18 //increase font size in the Input Field
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10
  }
});

export default SearchBar;