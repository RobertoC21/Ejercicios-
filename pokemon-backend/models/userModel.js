
const db = require('../db');

// Encontrar un usuario por email
exports.findByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
  return rows[0];
};

// Encontrar un usuario por ID
exports.findById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
  return rows[0];
};

// Crear un nuevo usuario
exports.create = async (nombre, email, password, rol_id = 2) => {
  const [result] = await db.execute(
    'INSERT INTO usuarios (nombre, email, password, rol_id) VALUES (?, ?, ?, ?)',
    [nombre, email, password, rol_id]
  );
  return result.insertId;
};

// Obtener el rol del usuario
exports.getUserRole = async (rol_id) => {
  const [rows] = await db.execute('SELECT nombre FROM roles WHERE id_rol = ?', [rol_id]);
  return rows[0].nombre;
};

// Actualizar información del usuario (opcional)
exports.update = async (id, nombre, email) => {
  await db.execute(
    'UPDATE usuarios SET nombre = ?, email = ? WHERE id_usuario = ?',
    [nombre, email, id]
  );
};
