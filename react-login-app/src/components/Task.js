// Task.js
import React from 'react';

function Task({ task, removeTask }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <span>{task}</span>
      <button onClick={removeTask} style={{ padding: '5px 10px' }}>Eliminar</button>
    </li>
  );
}

export default Task;
