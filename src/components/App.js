import React, { useState } from 'react';
import './App.css';
import Header from './Header';


function App() {
  const [counter, setCounter] = useState(0)

  function btnClickedFn() {
    setCounter(1);
  }

  return (
    <>
    <Header />
    <h1>Counter: {counter}</h1>
    <button onClick={btnClickedFn} >Increase</button>
    </>
  );
}

export default App;
