import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/general/Button';
import { CameraView, useCameraPermissions } from 'expo-camera';
import BackButton from '../components/general/BackButton';
import NumberInput from '../components/general/NumberInput';

const JoinGameScreen = () => {
  const [authScreen, setAuthScreen] = useState(false);
  // const [facing, setFacing] = useState('back');
  // const [permission, requestPermission] = useCameraPermissions();

  function switchAuthScreen() {
    setAuthScreen(!authScreen);
  }

  return (
    <View style={{ padding: 25 }}>
      <View>
        <BackButton></BackButton>
      </View>
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>Join Game</Text>
        {authScreen ? (
          <View style={styles.authScreen}>
            <Text style={styles.text}>Enter The Game Code</Text>
            <NumberInput />
            <View style={styles.inputGroup}>
              <Text style={styles.text}>
                or scan the given{' '}
                <Text onPress={switchAuthScreen} style={styles.pressableText}>
                  QR code
                </Text>
              </Text>
            </View>
            <Button text='Continue' onPress={() => ''} />
          </View>
        ) : (
          <View style={styles.authScreen}>
            <Text style={styles.text}>Scan the QR Code</Text>
            <View style={styles.cameraContainer}>
              <CameraView style={styles.camera}></CameraView>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.text}>
                or enter the{' '}
                <Text onPress={switchAuthScreen} style={styles.pressableText}>
                  game pin
                </Text>
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-start',
    padding: 25,
    gap: 10,
  },

  title: {
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
  },

  camera: {
    display: 'flex',
    height: 300,
    width: 300,
    borderRadius: 20,
  },

  cameraContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  authScreen: {
    display: 'flex',
    gap: 10,
  },

  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },

  text: {
    textAlign: 'center',
    justifyContent: 'center',
  },

  pressableText: {
    color: 'blue',
  },
});

export default JoinGameScreen;
