import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no ehtusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Katharina" />);
  expect(hello.find('.greeting').text()).toEqual('Hello Katharina!');
});

it('renders the correct text with an explicit enthusiasm level of 1', () => {
  const hello = enzyme.shallow(<Hello name="Katharina" enthusiasmLevel={1} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Katharina!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name="Katharina" enthusiasmLevel={5} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Katharina!!!!!');
});

it('throws when the enthusiasm levle is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Katharina" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Katharina" enthusiasmLevel={-1} />);
  }).toThrow();
});
