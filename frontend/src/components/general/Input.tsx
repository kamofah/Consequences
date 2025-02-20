import { View, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

interface InputProps {
  type: KeyboardTypeOptions;
}

const Input: React.FC<InputProps> = ({ type }) => {
  return (
    <View>
      <TextInput style={styles.input} keyboardType={type}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ced4da',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white'
  },
});

export default Input;
