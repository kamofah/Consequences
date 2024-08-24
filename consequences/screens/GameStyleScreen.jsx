import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../components/general/Button';
import BackButton from '../components/general/BackButton';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const GameStyleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.container}>
        <Text style={styles.title}>Select The How You Want To Play:</Text>
        <Button
          text='Pass The Phone'
          onPress={() => navigation.navigate('Game')}
        >
          <FontAwesome6 name='people-group' size={24} color='white' />
        </Button>
        <Button
          text='Multi-Screen'
          onPress={() => navigation.navigate('Wait')}
          isDisabled={true}
        >
          <MaterialIcons name='offline-share' size={24} color='white' />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default GameStyleScreen;
