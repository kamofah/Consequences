import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DoneButton from '../components/general/DoneButton';
import { Colors } from '../constants/colors';
import { useDeck } from '../hooks/useDeck';

const CardLayout = ({ children, topic }) => {
  const { changeCard } = useDeck();

  return (
    <View style={styles.container}>
      <View
        style={[styles.cardTypeSection, { backgroundColor: Colors[topic] }]}
      >
        <Text style={styles.cardType}>{topic}</Text>
      </View>
      <View style={styles.promptSection}>{children}</View>
      <View style={styles.cardFooter}>
        <Text style={styles.prompt}>#Consequences</Text>
        <DoneButton action={changeCard} color={Colors[topic]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 450,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
  },

  cardTypeSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  cardType: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  prompt: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    lineHeight: 30,
  },

  promptSection: {
    flex: 1,
    padding: 30,
    gap: 20,
  },

  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },
});

export default CardLayout;
