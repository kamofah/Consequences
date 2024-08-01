import { View, StyleSheet } from 'react-native';
import React from 'react';

const NumberInput = () => {
  return (
    <View style={styles.container}>
      <Input type='numeric' />
      <Input type='numeric' />
      <Input type='numeric' />
      <Input type='numeric' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
});

export default NumberInput;
