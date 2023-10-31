import React from 'react';

function TodoItem({ todo, editTodo, deleteTodo }) {
  return (
    <li className="list-item">
      {todo}
      <button onClick={editTodo}>Edit</button>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
