import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../constants/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BackButton from '../components/general/BackButton';
import SquareButton from '../components/general/SquareButton';

const GameModeScreen = ({ navigation }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1, padding: 25 }}>
      <BackButton></BackButton>
      <View style={styles.container}>
        <Text style={styles.heading}>Pick your game mode:</Text>
        <View style={styles.options}>
          <SquareButton
            text={'Classic'}
            backgroundColor={'#2C3E50'}
            onPress={() => navigateTo('GameStyle')}
          >
            <FontAwesome6 name='trophy' size={48} color='white' />
          </SquareButton>
          <SquareButton
            text={'Ladies Night'}
            backgroundColor={'#FF69B4'}
            isDisabled={true}
          >
            <FontAwesome6 name='wine-glass' size={48} color='white' />
          </SquareButton>
          <SquareButton
            text={'Date Night'}
            backgroundColor={'#C0392B'}
            isDisabled={true}
          >
            <MaterialCommunityIcons
              name='emoticon-kiss'
              size={48}
              color='white'
            />
          </SquareButton>
          <SquareButton
            text={'College Edition'}
            backgroundColor={'#2980B9'}
            isDisabled={true}
          >
            <Ionicons name='school-sharp' size={48} color='white' />
          </SquareButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    gap: 15,
  },

  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  options: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default GameModeScreen;
