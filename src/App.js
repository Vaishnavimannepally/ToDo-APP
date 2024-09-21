import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';  // Optional for styling

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: inputTitle,
      date: inputDate,
      status: 'Pending'
    };
    setTodos([...todos, newTodo]);
    setInputTitle("");
    setInputDate("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    const title = prompt("New title:");
    const date = prompt("New date:");
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, title, date } : todo
    ));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
