import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import React, { Children, Component } from 'react';

interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void | null;
  isDisabled: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  isDisabled,
  children,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          isDisabled
            ? [styles.buttonContainer, styles.buttonContainerDisabled]
            : [styles.buttonContainer, styles.buttonContainerActive]
        }
        onPress={isDisabled ? () => null : onPress}
      >
        {children}
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 5,
    padding: 20,
  },

  buttonContainerActive: {
    backgroundColor: '#3f37c9',
  },

  buttonContainerDisabled: {
    backgroundColor: 'grey',
  },

  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
  },
});

export default Button;
