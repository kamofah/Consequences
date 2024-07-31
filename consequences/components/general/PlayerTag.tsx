import { View, Text } from 'react-native';
import { formatPlayerNames } from '../../utils';
import React from 'react';

interface playerTagProps {
  firstName: string;
  lastName: string;
}

const PlayerTag: React.FC<playerTagProps> = ({ firstName, lastName }) => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 350,
      }}
    >
      <Text>{formatPlayerNames(firstName, lastName)}</Text>
    </View>
  );
};

export default PlayerTag;
