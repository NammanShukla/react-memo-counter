import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import StaticHello from './StaticHello';

const App = () => {
  const [count, setCount] = useState(0);

  console.log("Rendering ParentComponent (App)");

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React.memo Demo</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <CounterDisplay count={count} />
      <StaticHello />
    </div>
  );
};

export default App;
