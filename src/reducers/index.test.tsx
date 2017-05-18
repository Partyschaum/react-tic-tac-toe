import { enthusiasm } from './index';
import { incrementEnthusiasm, decrementEnthusiasm } from '../actions';
import { StoreState } from '../types';

describe('enthusiasm reducer', () => {
  let store: StoreState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  };

  it('increments the enthusiasm level by 1', () => {
    expect(enthusiasm(store, incrementEnthusiasm())).toEqual({
      enthusiasmLevel: 2,
      languageName: 'TypeScript',
    });
  });

  it('decrements the enthusiasm level by 1', () => {
    expect(enthusiasm(store, decrementEnthusiasm())).toEqual({
      enthusiasmLevel: 1,
      languageName: 'TypeScript',
    });
  });

  it('does not decrement the enthusiasm level below 1', () => {
    store = { ...store, enthusiasmLevel: 1 };
    expect(enthusiasm(store, decrementEnthusiasm())).toEqual({
      enthusiasmLevel: 1,
      languageName: 'TypeScript',
    });
  });
});
