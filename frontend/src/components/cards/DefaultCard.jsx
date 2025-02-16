import { Text, StyleSheet } from 'react-native';
import React from 'react';
import GameCardLayout from '../../layouts/GameCardLayout';

const DefaultCard = ({ prompt, topic, action }) => {
  return (
    <GameCardLayout topic={topic} action={action}>
      <Text style={styles.prompt}>{prompt}</Text>
    </GameCardLayout>
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
