import React, { useState } from 'react';
import axios from 'axios';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = ({ addToHistory }) => {
  const [display, setDisplay] = useState('');
  const [operand1, setOperand1] = useState(null);
  const [, setOperand2] = useState(null);// se elimino operand2,
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value) => {
    if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
      setOperand1(parseFloat(display));
      setDisplay('');
    } else if (value === '=') {
      setOperand2(parseFloat(display));
      if (operand1 !== null && operator !== null) {
        calculate(operand1, parseFloat(display), operator);
      }
    } else if (value === 'C') {
      resetCalculator();
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = async (op1, op2, operator) => {
    try {
      const response = await axios.post('http://localhost:8080/api/calculator/calculate', null, {
        params: {
          operand1: op1,
          operand2: op2,
          operator: operator,
        },
      });
      const result = response.data;
      setDisplay(result);
      addToHistory({ operand1: op1, operand2: op2, operator: operator, result: result });
    } catch (error) {
      alert('El número no puede ser divisible entre 0: ');
      resetCalculator();
    }
  };

  const resetCalculator = () => {
    setDisplay('');
    setOperand1(null);
    setOperand2(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
