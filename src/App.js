import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title=`pressed these ${count} time`
  });
  return(
    <div>
      <p>You clicked on {count} times</p>
      <button onClick={() => setCount(count + 1)}>Press Me</button>
    </div>
  )
}
