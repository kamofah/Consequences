import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const SquareButton = ({
  text,
  backgroundColor,
  isDisabled,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isDisabled ? '#D3D3D3' : backgroundColor },
      ]}
      onPress={onPress}
    >
      {children}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 155,
    height: 155,
    padding: 10,
    borderRadius: 5,
    rowGap: 10,
  },

  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default SquareButton;
