import * as React from 'react';

import { EMPTY_FIELD, PLAYER_ONE, PLAYER_TWO } from '../constants';
import { Field } from '../types';

import Square from './Square';

import './Board.css';

export interface Props { };

export interface State {
  squares: Field[];
  isPlayerOneNext: boolean;
};

class Board extends React.Component<Props, State> {
  public constructor() {
    super();
    this.state = {
      squares: Array<Field>(9).fill(EMPTY_FIELD),
      isPlayerOneNext: true,
    };
  }

  public render() {
    const winner = this.calculateWinner(this.state.squares);
    let status: string;

    if (winner !== EMPTY_FIELD) {
      status = `Winner: ${winner}`;
    } else {
      const nextPlayer = this.state.isPlayerOneNext ? PLAYER_ONE : PLAYER_TWO;
      status = `Next player ${nextPlayer}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    );
  }

  private handleClick(i: number) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) !== EMPTY_FIELD || squares[i] !== EMPTY_FIELD) {
      return;
    }
    squares[i] = this.state.isPlayerOneNext ? PLAYER_ONE : PLAYER_TWO;
    this.setState({
      squares,
      isPlayerOneNext: !this.state.isPlayerOneNext
    });
  }

  private renderSquare(i: number) {
    return (
      <Square
        field={this.state.squares[i - 1]}
        onClick={() => this.handleClick(i - 1)}
      />
    );
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

export default Board;
