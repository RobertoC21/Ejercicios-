// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import TaskList from './components/TaskList';

function App() {
  // Verificar si el usuario está autenticado
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para el Login */}
          <Route path="/" element={<Login />} />
          
          {/* Ruta para la página de tareas (protegida por autenticación) */}
          <Route
            path="/tasks"
            element={
              isAuthenticated ? <TaskList /> : <Navigate to="/" replace />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
