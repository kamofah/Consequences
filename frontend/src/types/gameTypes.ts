import { User } from './userTypes';

type Mode = 'CLASSIC' | 'COUPLES' | 'LADIES' | 'COLLEGE';

interface Game {
  gameCode: number;
  gameMode: Mode;
  gameStyle: String;
  host?: User;
}
