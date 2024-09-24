import React from 'react';

function Task({ task, index, deleteTask }) {
  return (
    <li>
      {task.text}  {/* Muestra el texto de la tarea */}
      <button onClick={() => deleteTask(index)}>Eliminar</button>  {/* Botón para eliminar la tarea */}
    </li>
  );
}

export default Task;
