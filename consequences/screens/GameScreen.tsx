import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackButton from '../components/general/BackButton';
import DefaultCard from '../components/cards/DefaultCard';

import { useDeck } from '../hooks/useDeck';

const GameScreen = () => {
  const { currentCard } = useDeck();
  return (
    <View style={styles.container}>
      <View>
        <BackButton></BackButton>
      </View>
      <View style={styles.cardContainer}>
        <DefaultCard
          topic={currentCard?.topic}
          prompt={currentCard?.prompt}
        ></DefaultCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    // gap: 20
  },

  cardContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    shadowColor: '#adb5bd',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default GameScreen;
