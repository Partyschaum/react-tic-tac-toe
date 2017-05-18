import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

describe('greeting message rendering', () => {
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
});

describe('callback handling', () => {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();

  const component = enzyme.shallow(
    <Hello
      name="Katharina" enthusiasmLevel={1}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );

  it('handles onDecrement', () => {
    component.find('button').at(0).simulate('click');
    expect(onDecrement).toHaveBeenCalled();
  });

  it('handles onIncrement', () => {
    component.find('button').at(1).simulate('click');
    expect(onIncrement).toHaveBeenCalled();
  });
});
