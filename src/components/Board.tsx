import * as React from 'react';

import { Field } from '../types';

import Square from './Square';

import './Board.css';

export interface Props {
  squares: Field[];
  onClick: (i: number) => void;
};

export interface State { };

class Board extends React.Component<Props, State> {
  public render() {
    return (
      <div>
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

  private renderSquare(i: number) {
    return (
      <Square
        field={this.props.squares[i - 1]}
        onClick={() => this.props.onClick(i - 1)}
      />
    );
  }
}

export default Board;
