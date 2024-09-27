// TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText(''); // Limpiar el campo después de agregar la tarea
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Nueva tarea"
        style={{ width: '70%', padding: '8px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 15px' }}>Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
