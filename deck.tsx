import { Deck } from './types/cardTypes';

export const cardDeck: Deck = [
  {
    cardID: 0,
    cardType: 'DEFAULT',
    topic: 'TRUTH',
    prompt:
      'Reveal details about a time when your partner really came through for you. Toast them with a drink!',
    consequence: 2,
    playersNeeded: 1,
    timer: null,
    assignedTo: null,
  },
  {
    cardID: 1,
    cardType: 'DEFAULT',
    topic: 'ASSUME',
    prompt:
      'Take a guess as to which girl you think would have the most instagram followers',
    consequence: 1,
    playersNeeded: 1,
    timer: null,
    assignedTo: null,
  },
  {
    cardID: 2,
    cardType: 'DEFAULT',
    topic: 'DARE',
    prompt:
      'Let the group go through the last 10 photos in your camera roll and decide on one to post on your instagram story',
    consequence: 1,
    playersNeeded: 1,
    timer: null,
    assignedTo: null,
  },
  {
    cardID: 3,
    cardType: 'DEFAULT',
    topic: 'FREAKY',
    prompt: 'Get the music ready! Give ____ a lap dance for 30 seconds.',
    consequence: 3,
    playersNeeded: 1,
    timer: null,
    assignedTo: null,
  },
  {
    cardID: 4,
    cardType: 'DEFAULT',
    topic: 'GUYS',
    prompt:
      "Guys you don't seem like your having enough fun. Every guy should take 2 shots",
    consequence: 2,
    playersNeeded: 1,
    timer: null,
    assignedTo: null,
  },
  {
    cardID: 5,
    cardType: 'DEFAULT',
    topic: 'FREAKY',
    prompt: 'Nibble on the ear lobe of the person to the right',
    consequence: 3,
    playersNeeded: 1,
    timer: null,
    assignedTo: null,
  },
];

export const shuffleDeck = (deck: Deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};
