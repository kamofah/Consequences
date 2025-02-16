import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import BackButton from '../components/general/BackButton';
import DefaultCard from '../components/cards/DefaultCard';
import ShareButton from '../components/general/ShareButton';

import { useDeck } from '../hooks/useDeck';
import { Colors } from '../constants/colors';

const GameScreen = () => {
  const { currentCard, goToNextCard } = useDeck();

  const cardRef = useRef(null);

  return (
    <View style={styles.container}>
      <View>
        <BackButton></BackButton>
      </View>
      <View style={styles.cardContainer} ref={cardRef}>
        <DefaultCard
          topic={currentCard?.topic}
          prompt={currentCard?.prompt}
          action={goToNextCard}
        ></DefaultCard>
      </View>
      <ShareButton viewRef={cardRef} backgroundColor={Colors[currentCard?.topic ?? 'CARD_SHADOW']}></ShareButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  cardContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    shadowColor: Colors.CARD_SHADOW,
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default GameScreen;
