import { View, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import BackButton from '../components/general/buttons/BackButton';
import DefaultCard from '../components/cards/DefaultCard';
import ShareButton from '../components/general/buttons/ShareButton';
import { useDeck } from '../hooks/useDeck';
import { Colors } from '../constants/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import CircleButtonLayout from '../layouts/CircleButtonLayout';


interface CircleButton {
  backgroundColor: string,
  action: () => void
}

const DrinkButton: React.FC<CircleButton> = ({backgroundColor, action}) => {
  return (
    <CircleButtonLayout backgroundColor={backgroundColor} action={action}>
      <MaterialIcons name="local-drink" size={24} color="white" />
    </CircleButtonLayout>
  );
};

const DoneButton: React.FC<CircleButton> = ({backgroundColor, action}) => {
  return (
    <CircleButtonLayout backgroundColor={backgroundColor} action={action}>
      <Entypo name="check" size={24} color="white" />
    </CircleButtonLayout>
  );
};

const GameScreen = () => {
  const { currentCard, goToNextCard } = useDeck();

  const cardRef = useRef(null);

  return (
    <View style={styles.container}>
      <View>
        <BackButton></BackButton>
      </View>
      <View style={styles.cardContainer} ref={cardRef}>
        <DefaultCard
          topic={currentCard?.topic}
          prompt={currentCard?.prompt}
          shotCount={currentCard?.consequence}
          action={goToNextCard}
        ></DefaultCard>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <ShareButton viewRef={cardRef} backgroundColor={Colors.GRAY}></ShareButton>
        <View style={{display: 'flex', flexDirection: 'row', gap: 15}}>
          <DoneButton backgroundColor={Colors.SUCCESS} action={goToNextCard}></DoneButton>
          <DrinkButton backgroundColor={Colors.DANGER} action={() => {}}></DrinkButton>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  cardContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    shadowColor: Colors.CARD_SHADOW,
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default GameScreen;
