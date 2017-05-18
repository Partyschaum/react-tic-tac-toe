import { EMPTY_FIELD, PLAYER_ONE, PLAYER_TWO } from '../constants';

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export type Field = PLAYER_ONE | PLAYER_TWO | EMPTY_FIELD;

export interface GameRound {
  squares: Field[];
}

export type History = GameRound[];
