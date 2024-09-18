import React from 'react';

const Keypad = ({ onButtonClick }) => {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="keypad">
      {buttons.map((button) => (
        <button key={button} onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
