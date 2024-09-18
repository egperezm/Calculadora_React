import React, { useState } from 'react';
import Calculator from './components/Calculator';
import History from './components/History';
import './App.css';

function App() {
  const [history, setHistory] = useState([]);

  const addToHistory = (operation) => {
    setHistory([operation, ...history.slice(0, 9)]);
  };

  return (
    <div className="App">
      <h1>Calculadora React</h1>
      <Calculator addToHistory={addToHistory} />
      <History history={history} />
    </div>
  );
}

export default App;
