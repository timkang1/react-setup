import React, { useState, useEffect } from 'react';

export default function App() {
  const initialCount = () => Number(window.localStorage.getItem('count') || 0); // initialCount is a function instead of a value because that function will only be run on the first render. You don't want React to look into localStorage everytime it renders.
  const [count, setCount] = useState(initialCount);

  // React will call the callback inside useEffect ONLY when the count value changes
  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);

  return(
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}