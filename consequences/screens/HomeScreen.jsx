import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../components/general/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consequnces</Text>
      <Button text='Start Game' onPress={() => navigation.navigate('Wait')} />
      <Button text='Join Game' onPress={() => navigation.navigate('Join')} />
      <Button
        text='Instructions'
        onPress={() => navigation.navigate('Instructions')}
      />
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
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default HomeScreen;
