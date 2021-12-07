import React, { useState } from "react";
import "./App.css";
let globalID = 0

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(""); //this hook is for getting the value inside the input field

  function addTodo(e) {
    e.preventDefault();
    setTask(""); //this will set the input value blank
    setTodos((oldTodos) => {
      return [...oldTodos, { todo: task, id: globalID++ }]; //old todos with new object
    });
  }

  function deleteItem(itemID){          //this itemID is a parameter and its value comes from button onclick
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }

  return (
    <>
    <form onSubmit ={addTodo}>
      <h1>This is the best TODO App ever</h1>
      <input
        value={task}
        onChange={(e) => {
          //value and onchange is necessery
          setTask(e.target.value); //settask re se input value ku grab kariki task variable ku patha hela then settodos re sei task varibble ku use karikki ta value ku display karagala
        }}
      />
      <button>Add</button>
      </form>
      <ul>
        {todos.map((item, index) => {
          return <div key={item.id}>
                  <li>{item.todo} ({item.id})</li>
                  <button onClick={()=> deleteItem(item.id)} >Delete</button>
                  </div> 
        })}
      </ul>
    </>
  );
}

export default App;
