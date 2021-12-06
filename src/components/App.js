import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const quotes = [
    "If you are good enough, never do it for free",
    "i am not afraid of a man who practice 1000 kicks 1 time, rather practice 1 kick thousand times",
    "abc",
    "def"
  ]
  const [quote, setquote] = useState(quotes[0])

  useEffect(() => {
    console.log('I Ran', quote);
  }, [quote])
  function randomizeQuotes(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setquote(randomQuote)
  }
  return (
    <>
    <div>{quote}</div>                                                    
    <button onClick={randomizeQuotes} >click Me</button>
    </>
  );
}

export default App;
