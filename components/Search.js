import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export const Search = () => {
  return (
    <View style={styles.search}>
      <TextInput
        placeholder="Find Your Food"
        style={styles.textInput}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: 42,
    marginTop: 10,
    marginLeft: 15,
    borderColor: '#009688',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
