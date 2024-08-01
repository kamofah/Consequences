import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const DoneButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>Done</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f37c9',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
  },

  buttonText: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DoneButton;
