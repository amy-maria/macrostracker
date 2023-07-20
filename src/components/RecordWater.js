import React, { useState } from 'react';

const RecordWater = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <h1>Add Water</h1>
        <p>{count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default RecordWater;
