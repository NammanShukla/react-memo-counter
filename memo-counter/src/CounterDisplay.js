import React from 'react';


const CounterDisplay = ({ count }) => {
  console.log("CounterDisplay component rendered");
  return <h2>Counter: {count}</h2>;
};

export default React.memo(CounterDisplay);