import * as React from 'react';

import { EMPTY_FIELD, FIELD } from '../constants';

import './Square.css';

export interface Props {
  field: FIELD;
  onClick: () => void;
};

function Square({ field = EMPTY_FIELD, onClick }: Props) {
  return (
    <button className="square" onClick={onClick}>
      {field}
    </button >
  );
}

export default Square;
