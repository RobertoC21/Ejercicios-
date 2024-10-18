
const db = require('../db');

// Agregar un Pokémon a favoritos
exports.add = async (usuario_id, pokemon_id) => {
  await db.execute(
    'INSERT INTO favoritos (usuario_id, pokemon_id, fecha_agregado) VALUES (?, ?, NOW())',
    [usuario_id, pokemon_id]
  );
};

// Eliminar un Pokémon de favoritos
exports.remove = async (usuario_id, pokemon_id) => {
  await db.execute(
    'DELETE FROM favoritos WHERE usuario_id = ? AND pokemon_id = ?',
    [usuario_id, pokemon_id]
  );
};

// Obtener los Pokémon favoritos de un usuario
exports.getFavoritesByUserId = async (usuario_id) => {
  const [rows] = await db.execute(
    `SELECT p.*
     FROM pokemones p
     INNER JOIN favoritos f ON p.id_pokemon = f.pokemon_id
     WHERE f.usuario_id = ?`,
    [usuario_id]
  );
  return rows;
};

// Verificar si un Pokémon ya está en favoritos
exports.isFavorite = async (usuario_id, pokemon_id) => {
  const [rows] = await db.execute(
    'SELECT * FROM favoritos WHERE usuario_id = ? AND pokemon_id = ?',
    [usuario_id, pokemon_id]
  );
  return rows.length > 0;
};
