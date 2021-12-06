import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([ //this hook is for displaying the todos list, will use submit when add btn will be clicked
    'sanjeeb',                         //this value will be stored inside todos variable
    'gochhayat',
    'somu',
    'bhubaneswar'
  ])
  const [task, setTask] = useState('')//this hook is for getting the value inside the input field
  function addTodo(){
    setTodos(oldTodos => {
      return [...oldTodos, task]
      
    })
  }

  return (
    <>
      <h1>This is the best TODO App ever</h1>
      <input value={task} onChange={e =>{     //value and onchange is necessery
        setTask(e.target.value)               //settask re se input value ku grab kariki task variable ku patha hela then settodos re sei task varibble ku use karikki ta value ku display karagala
      }}/>
      <button onClick={addTodo} >Add</button>
      <ul>{todos.map(todo => {
        return <li>{todo}</li>
      })}</ul>
    </>
  );
}

export default App;
