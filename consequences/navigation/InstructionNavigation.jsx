import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import GeneralInstructions from '../screens/GeneralInstructions';
import HostInstructionsScreen from '../screens/HostInstructionsScreen';
import PlayerInstructionsScreen from '../screens/PlayerInstructionsScreen';

const InstructionNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 3,
          borderRadius: 5,
        },
        tabBarLabelStyle: {
          letterSpacing: 1,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name='GeneralInstructions'
        component={GeneralInstructions}
        options={{
          tabBarLabel: 'General',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='HostInstructions'
        component={HostInstructionsScreen}
        options={{
          tabBarLabel: 'Host',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='PlayerInstructions'
        component={PlayerInstructionsScreen}
        options={{
          tabBarLabel: 'Player',
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default InstructionNavigation;
