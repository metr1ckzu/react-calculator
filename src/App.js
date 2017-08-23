import React from 'react';
import './index.css'

class Calculator extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    waitingForOperand: false,
    operator: null,
  }

  clearDisplay() {
    this.setState({
      displayValue: '0'
    })
  }

  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }

  inputDot() {
    const { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: '0.',
        waitingForOperand: false
      })
    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.'
      })
    }
  }


  performOperation(nextOperator) {
    const  { displayValue , operator, value } = this.state
    const inputValue = parseFloat(displayValue)

    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }

    if (value == null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, inputValue)

      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      })
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })

  }

  render() {
    const { displayValue} = this.state

    return (
      <div className="calculator">
        <div className="txtScreen">{displayValue}</div>
      	<div className="numericPad">
      		<div className="rowsNumPad">
            <button className="btnNum" onClick={() => this.inputDigit(7)}>7</button>
            <button className="btnNum" onClick={() => this.inputDigit(8)}>8</button>
            <button className="btnNum" onClick={() => this.inputDigit(9)}>9</button>
      		</div>
      		<div className="rowsNumPad">
            <button className="btnNum" onClick={() => this.inputDigit(4)}>4</button>
            <button className="btnNum" onClick={() => this.inputDigit(5)}>5</button>
            <button className="btnNum" onClick={() => this.inputDigit(6)}>6</button>
      		</div>
      		<div className="rowsNumPad">
            <button className="btnNum" onClick={() => this.inputDigit(1)}>1</button>
            <button className="btnNum" onClick={() => this.inputDigit(2)}>2</button>
            <button className="btnNum" onClick={() => this.inputDigit(3)}>3</button>
      		</div>
      		<div className="rowsNumPad">
            <button className="btnNum" onClick={() => this.inputDot()}>.</button>
            <button className="btnNum" onClick={() => this.inputDigit(0)}>0</button>
            <button className="btnNum" onClick={() => this.performOperation('=')}>=</button>
      		</div>
      	</div>
      	<div className="funtionPad">
          <div className="rowsFuntionPad">
            <button className="btnFuntionPad" onClick={() => this.clearDisplay()}>DEL</button>
          </div>
          <div className="rowsFuntionPad">
            <button className="btnFuntionPad" onClick={() => this.performOperation('/')}>÷</button>
          </div>
          <div className="rowsFuntionPad">
            <button className="btnFuntionPad" onClick={() => this.performOperation('*')}>x</button>
          </div>
          <div className="rowsFuntionPad">
            <button className="btnFuntionPad" onClick={() => this.performOperation('-')}>-</button>
          </div>
          <div className="rowsFuntionPad">
            <button className="btnFuntionPad" onClick={() => this.performOperation('+')}>+</button>
          </div>
      	</div>
        <div className="extraFuntionPad"></div>
      </div>

    )
  }
}

export default Calculator
