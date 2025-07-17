import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import Usuario from './usuario.js';
import Especie from './especie.js';

const Mascota = sequelize.define('Mascota', {
  edad: DataTypes.INTEGER,
  compatibleNiños: DataTypes.BOOLEAN,
  compatibleMascotas: DataTypes.BOOLEAN,
  vacunas: DataTypes.TEXT,
  castrado: DataTypes.BOOLEAN
}, {
  tableName: 'mascotas'
});

// Relaciones
Mascota.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Mascota.belongsTo(Especie, { foreignKey: 'especieId' });

Usuario.hasMany(Mascota, { foreignKey: 'usuarioId' });
Especie.hasMany(Mascota, { foreignKey: 'especieId' });

export default Mascota;
