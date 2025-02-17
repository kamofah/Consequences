import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Pill from '../components/general/Pill';
import { Colors } from '../constants/colors';
import { formatShotCount } from '../utils';

const GameCardLayout = ({ children, topic, shotCount }) => {

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
        <Pill text={shotCount + formatShotCount(shotCount)} color={Colors[topic]} />
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

export default GameCardLayout;
