import React from 'react';
import './index.css'

class CalculatorES extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      displayValue: '0',
      waitingForOperand: false,
      operator: null,
    }
  }

  clearDisplay() {
    this.setState({
      displayValue: '0'
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

export default CalculatorES
