import * as React from 'react';

import { EMPTY_FIELD, FIELD, PLAYER_ONE } from '../constants';

import Square from './Square';

import './Board.css';

export interface Props { };

export interface State {
  squares: FIELD[];
};

class Board extends React.Component<Props, State> {
  public constructor() {
    super();
    this.state = {
      squares: Array(9).fill(EMPTY_FIELD)
    };
  }

  public render() {
    const status = 'Next player: X';

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
    squares[i] = PLAYER_ONE;
    this.setState({ squares });
  }

  private renderSquare(i: number) {
    return (
      <Square
        field={this.state.squares[i - 1]}
        onClick={() => this.handleClick(i - 1)}
      />
    );
  }
}

export default Board;
