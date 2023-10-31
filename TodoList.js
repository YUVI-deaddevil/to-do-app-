import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (task) => {
    if (editIndex !== null) {
      const newTodos = [...todos];
      newTodos[editIndex] = task;
      setTodos(newTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }
  };

  const editTodo = (index) => {
    const task = todos[index];
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <div className="header">
        <h1>To-Do List</h1>
        <TodoInput addTodo={addTodo} />
      </div>
      <ul className="list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            editTodo={() => editTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

