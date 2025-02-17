import { Text, StyleSheet } from 'react-native';
import React from 'react';
import GameCardLayout from '../../layouts/GameCardLayout';

const DefaultCard = ({ prompt, topic, action, shotCount }) => {
  return (
    <GameCardLayout topic={topic} action={action} shotCount={shotCount}>
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
