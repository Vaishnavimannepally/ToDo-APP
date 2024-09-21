import React from 'react';

function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{index + 1}</td>
            <td>{todo.title}</td>
            <td>{todo.date}</td>
            <td>{todo.status}</td>
            <td>
              <button onClick={() => editTodo(todo.id)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
