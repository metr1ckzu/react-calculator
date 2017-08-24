import React from 'react';
import CalculatorES from './refactoredApp';
import styles from 'index.css';
import { shallow } from 'enzyme'

// describe('Calculator', () => {
//   it('has a default state', () => {
//     expect().toEqual({
//       value: null,
//       displayValue: '0',
//       waitingForOperand: false,
//       operator: null,
//     });
//   });
// });

describe('<CalculatorES />'), () => {
  it('should had state'), () => {
    const wrapper = shallow(<CalculatorES />);
    expect(wrapper.state('value')).to.equal(null);
  };
};
