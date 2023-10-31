import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() === '') return;
    addTodo(task);
    setTask('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
