import * as React from 'react';

import { PLAYER_ONE, EMPTY_FIELD, FIELD } from '../constants';

import './Square.css';

export interface Props { };

export interface State {
  field: FIELD;
};

class Square extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      field: EMPTY_FIELD,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ field: PLAYER_ONE })}>
        {this.state.field}
      </button >
    );
  }
}

export default Square;
