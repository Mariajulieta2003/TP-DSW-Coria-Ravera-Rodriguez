import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import Mascota from './mascota.js';
import Especie from './especie.js';

const Patologia = sequelize.define('Patologia', {
  observacion: DataTypes.TEXT
}, {
  tableName: 'patologias'
});

// Relaciones
Patologia.belongsTo(Mascota, { foreignKey: 'mascotaId' });
Patologia.belongsTo(Especie, { foreignKey: 'especieId' });

Mascota.hasMany(Patologia, { foreignKey: 'mascotaId' });
Especie.hasMany(Patologia, { foreignKey: 'especieId' });

export default Patologia;

