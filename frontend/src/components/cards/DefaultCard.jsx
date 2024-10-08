import { Text, StyleSheet } from 'react-native';
import React from 'react';
import CardLayout from '../../layouts/CardLayout';

const DefaultCard = ({ prompt, topic }) => {
  return (
    <CardLayout topic={topic}>
      <Text style={styles.prompt}>{prompt}</Text>
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
