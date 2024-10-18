
const db = require('../db');

// Obtener todos los Pokémon agregados por el administrador
exports.getAll = async () => {
  const [rows] = await db.execute('SELECT * FROM pokemones');
  return rows;
};

// Encontrar un Pokémon por ID
exports.findById = async (id_pokemon) => {
  const [rows] = await db.execute('SELECT * FROM pokemones WHERE id_pokemon = ?', [id_pokemon]);
  return rows[0];
};

// Agregar un nuevo Pokémon a la base de datos
exports.create = async (id_pokemon, nombre, tipo, imagen_url) => {
  await db.execute(
    'INSERT INTO pokemones (id_pokemon, nombre, tipo, imagen_url) VALUES (?, ?, ?, ?)',
    [id_pokemon, nombre, tipo, imagen_url]
  );
};

// Eliminar un Pokémon de la base de datos
exports.delete = async (id_pokemon) => {
  await db.execute('DELETE FROM pokemones WHERE id_pokemon = ?', [id_pokemon]);
};

// Verificar si un Pokémon ya está en la base de datos
exports.exists = async (id_pokemon) => {
  const [rows] = await db.execute('SELECT 1 FROM pokemones WHERE id_pokemon = ?', [id_pokemon]);
  return rows.length > 0;
};
