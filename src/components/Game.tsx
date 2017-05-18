import * as React from 'react';

import { EMPTY_FIELD } from '../constants';
import { Field, History } from '../types';

import Board from './Board';

import './Game.css';

export interface Props { };

export interface State {
  history: History;
  isPlayerOneNext: boolean;
};

class Game extends React.Component<Props, State> {
  public constructor() {
    super();
    this.state = {
      history: [{
        squares: Array<Field>(9).fill(EMPTY_FIELD),
      }],
      isPlayerOneNext: true,
    };
  }

  public render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
