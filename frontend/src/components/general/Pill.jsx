import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDeck } from '../../hooks/useDeck';

const Pill = ({ text, color }) => {

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f37c9',
    paddingHorizontal: 10,
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

export default Pill;
