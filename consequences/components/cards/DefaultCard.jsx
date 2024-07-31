import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const DefaultCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardTypeSection}>
        <Text style={styles.cardType}>Truth</Text>
      </View>
      <View style={styles.promptSection}>
        <Text style={styles.prompt}>
          Reveal details about a time when your partner really came through for
          you. Toast them with a drink!
        </Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.prompt}>#Consequences</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#3f37c9',
            paddingHorizontal: 15,
            paddingVertical: 7,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
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
    backgroundColor: 'black',
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

export default DefaultCard;
