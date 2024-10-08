import { User } from './userTypes';

export type CardTopics =
  | 'TRUTH'
  | 'DARE'
  | 'GUYS'
  | 'GALS'
  | 'FREAKY'
  | 'ASSUME'
  | 'FLIRTATION'
  | 'PARANOIA'
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

export interface ParanoiaCard extends Card {
  recipeint: User;
  input: string;
}

export type Deck = Card[];
