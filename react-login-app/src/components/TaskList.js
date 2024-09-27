// TaskList.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import { useNavigate } from 'react-router-dom';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // Agregar una nueva tarea a la lista
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  // Eliminar una tarea de la lista
  const removeTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  // Manejar el logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar token
    navigate('/'); // Redirigir al login
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <button onClick={handleLogout} style={{ marginBottom: '20px', padding: '10px 20px' }}>Cerrar Sesión</button>
      <h2>Lista de Tareas</h2>
      <TaskForm addTask={addTask} />
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} removeTask={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
