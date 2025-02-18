import { useState, useEffect } from 'react';
import { shuffleDeck, cardDeck } from '../deck';
import { Card, Deck } from '../types/cardTypes';

export const useDeck = () => {
  const [deck, setDeck] = useState<Deck>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://consequences.onrender.com/api/cards/');
        const json = await response.json();
        setDeck(shuffleDeck(json));
      } catch (error) {
        console.error("Failed to fetch deck data", error);
      } 
    };
    fetchData()
    setCurrentCardIndex(0);
  }, []);

  useEffect(() => {
    setCurrentCard(deck[currentCardIndex]);
  }, [deck, currentCardIndex]);

  const goToNextCard = () => {
    if(currentCardIndex + 1 > deck.length - 1){
      setDeck(shuffleDeck(deck));
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex(currentCardIndex + 1)
    }
  };

  return { currentCard, goToNextCard };
};
