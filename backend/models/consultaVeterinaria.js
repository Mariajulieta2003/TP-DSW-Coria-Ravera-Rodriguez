import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import Mascota from './mascota.js';
import Veterinario from './veterinario.js';

const ConsultaVeterinaria = sequelize.define('ConsultaVeterinaria', {
  fecha: DataTypes.DATE,
  observacion: DataTypes.TEXT
}, {
  tableName: 'consultas_veterinarias'
});

// Relaciones
ConsultaVeterinaria.belongsTo(Mascota, { foreignKey: 'mascotaId' });
ConsultaVeterinaria.belongsTo(Veterinario, { foreignKey: 'veterinarioId' });

Mascota.hasMany(ConsultaVeterinaria, { foreignKey: 'mascotaId' });
Veterinario.hasMany(ConsultaVeterinaria, { foreignKey: 'veterinarioId' });

export default ConsultaVeterinaria;

