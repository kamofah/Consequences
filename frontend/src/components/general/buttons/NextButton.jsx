import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const NextButton = ({ action, color }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={action}
    >
      <Text style={styles.buttonText}>Next</Text>
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

export default NextButton;
