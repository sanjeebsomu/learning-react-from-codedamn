import React,{ useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState(['Add Your Task From Above Input Field'])
  const [extract, setExtract] = useState()//extract from input field

  function createTodo(){
    setTodos(oldTodos =>{
      return[...oldTodos, extract]
    })
  }

  return (
    <>
    <h1>Best To-Do App Ever</h1>
    <input type="text" value={extract} onChange={e =>{
      setExtract(e.target.value)
    }} />
    <button onClick={createTodo} >Create TODO</button>
    <ul>
      {todos.map(todo =>{
        return <li>{todo}</li>
      })}
    </ul>
    </>
  );
}

export default App;
