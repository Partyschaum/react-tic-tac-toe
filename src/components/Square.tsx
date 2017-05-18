import * as React from 'react';

import { EMPTY_FIELD } from '../constants';
import { Field } from '../types';

import './Square.css';

export interface Props {
  field: Field;
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
