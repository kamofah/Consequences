import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name='left' size={24} color='black' />
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButtonText: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default BackButton;
