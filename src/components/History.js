import React from 'react';

const History = ({ history }) => {
  return (
    <div className="history">
      <h2>Historial</h2>
      <ul>
        {history.map((operation, index) => (
          <li key={index}>
            {operation.operand1} {operation.operator} {operation.operand2} = {operation.result}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;