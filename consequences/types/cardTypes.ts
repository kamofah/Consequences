import { User } from './userTypes';

export type CardTopics = 'TRUTH' | 'DARE' | 'GUYS' | 'GALS' | 'FREAKY' | 'AD';

export interface Card {
  cardID: number;
  topic: CardTopics;
  // cardType:
  prompt: string;
  consequence: number;
  playersNeeded: number;
  timer: number;
  assignedTo: User;
}

export interface Deck {
  deckOrder: number[];
}
