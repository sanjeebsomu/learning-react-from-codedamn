import React, { useState } from 'react';
import './App.css';
import Header from './Header';


function App() {
  const [counter, setCounter] = useState(0)

  function increase() {
    // setCounter(counter + 1);           //do this when we do not depend on the older value
    /*setCounter(function(oldCounterVal){   //do this when we have to depend on the previous(older value)
      return oldCounterVal + 1;
    })*/
    //or one liner
    setCounter(oldCounterVal => oldCounterVal + 1)//read this as "set counter function oldecounterval return oldcounterval + 1"
  }
  function decrease() {
    // setCounter(counter - 1);           //do this when we do not depend on the older value
    setCounter(function(oldCounterVal){   //do this when we have to depend on the previous(older value)
      return oldCounterVal - 1;
    })
  }

  return (
    <>
    <Header />
    <h1>Counter: {counter}</h1>
    <button onClick={increase} >Increase</button>
    <button onClick={decrease} >Decrease</button>
    </>
  );
}

export default App;
