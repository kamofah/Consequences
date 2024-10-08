import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  JoinGameScreen,
  WaitingRoom,
  GameScreen,
} from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import InstructionNavigation from './src/navigation/InstructionNavigation';
import GameStyleScreen from './src/screens/GameStyleScreen';
import GameModeScreen from './src/screens/GameModeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
            contentStyle: styles.container,
          }}
        >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Mode' component={GameModeScreen} />
          <Stack.Screen name='GameStyle' component={GameStyleScreen} />
          <Stack.Screen name='Join' component={JoinGameScreen} />
          <Stack.Screen name='Wait' component={WaitingRoom} />
          <Stack.Screen name='Game' component={GameScreen} />
          <Stack.Screen name='Instructions' component={InstructionNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
