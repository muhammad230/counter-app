import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } 
  };
  const handleReset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <button className='btn' onClick={handleIncrement}>+</button>
      <button className='btn' onClick={handleDecrement} disabled={count === 0}>-</button>
      <button className='btn' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
