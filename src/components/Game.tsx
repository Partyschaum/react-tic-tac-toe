import * as React from 'react';

import { EMPTY_FIELD, PLAYER_ONE, PLAYER_TWO } from '../constants';
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
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = this.calculateWinner(current.squares);

    let status: string;

    if (winner !== EMPTY_FIELD) {
      status = `Winner: ${winner}`;
    } else {
      const nextPlayer = this.state.isPlayerOneNext ? PLAYER_ONE : PLAYER_TWO;
      status = `Next player ${nextPlayer}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }

  private handleClick(i: number) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) !== EMPTY_FIELD || squares[i] !== EMPTY_FIELD) {
      return;
    }
    squares[i] = this.state.isPlayerOneNext ? PLAYER_ONE : PLAYER_TWO;
    this.setState({
      history: history.concat([{
        squares
      }]),
      isPlayerOneNext: !this.state.isPlayerOneNext,
    });
  }

  private calculateWinner(squares: Field[]): Field {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return EMPTY_FIELD;
  }
}

export default Game;
