import React, { useState } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState('');

  const handleClick = (value) => {
    setCount(count + value);
  };

  const handleEvaluate = () => {
    try {
      setCount(eval(count).toString());
    } catch (error) {
      setCount('Error');
    }
  };

  const handleDelete = () => {
    setCount(count.slice(0, -1));
  };

  const handleClear = () => {
    setCount('');
  };

  return (
    <div>
      <div className='wrapper'>
        <div className='center__up'>
          <input type="text" value={count} readOnly />
        </div>
        <div className='center__down'>
          <div className='buttons__inline'>
            <button onClick={handleClear} style={{background: 'yellow'}}>CE</button>
            <button onClick={handleDelete}>&lt;</button>
            <button onClick={() => handleClick('%')}>÷</button>
            <button onClick={() => handleClick('/')}>/</button>
          </div>
          <div className='buttons__inline'>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('*')}>x</button>
          </div>
          <div className='buttons__inline'>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('-')}>-</button>
          </div>
          <div className='buttons__inline'>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('+')}>+</button>
          </div>
          <div className='buttons__inline'>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('00')}>00</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={handleEvaluate} style={{background: 'rgb(211, 61, 211)'}}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
