import { Text, StyleSheet } from 'react-native';
import React from 'react';
import CardLayout from '../../layouts/CardLayout';

const DefaultCard = ({ prompt }) => {
  return (
    <CardLayout topic={'Truth'}>
      <Text style={styles.prompt}>
        Reveal details about a time when your partner really came through for
        you. Toast them with a drink!
      </Text>
    </CardLayout>
  );
};

const styles = StyleSheet.create({
  prompt: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    lineHeight: 30,
  },
});

export default DefaultCard;
