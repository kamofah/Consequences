import { User } from './userTypes';

export type CardTopics =
  | 'TRUTH'
  | 'DARE'
  | 'GUYS'
  | 'GALS'
  | 'FREAKY'
  | 'ASSUME'
  | 'AD';
export type CardTypes = 'DEFAULT' | 'INPUT' | 'AD';

export interface Card {
  cardID: number;
  topic: CardTopics;
  cardType: CardTypes;
  prompt: string;
  consequence: number;
  playersNeeded: number;
  timer: number | null;
  assignedTo: User | null;
}

export type Deck = Card[];
