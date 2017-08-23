import Calculator from '../src/App'

describe('Calculator', () => {
  it('has a default state', () => {
    expect().toEqual({
      value: null,
      displayValue: '0',
      waitingForOperand: false,
      operator: null,
    });
  });
});
