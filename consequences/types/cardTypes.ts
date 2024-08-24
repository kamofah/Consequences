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
  assignedTo: User[] | null;
  timer: number | null;
}

export interface MusicCard extends Card {
  song: null;
  artist: string;
  coverImage: null;
  startTime: number;
  endTime: number;
}

export type Deck = Card[];
