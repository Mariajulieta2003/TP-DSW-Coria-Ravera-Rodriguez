import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import Usuario from './usuario.js';
import Mascota from './mascota.js';

const SolicitudAdopcion = sequelize.define('SolicitudAdopcion', {
  fecha: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  },
  estado: { 
    type: DataTypes.STRING, 
    defaultValue: 'pendiente' 
  }
}, {
  tableName: 'solicitudes_adopcion'
});

// Relaciones
SolicitudAdopcion.belongsTo(Usuario, { foreignKey: 'usuarioId' });
SolicitudAdopcion.belongsTo(Mascota, { foreignKey: 'mascotaId' });

Usuario.hasMany(SolicitudAdopcion, { foreignKey: 'usuarioId' });
Mascota.hasMany(SolicitudAdopcion, { foreignKey: 'mascotaId' });

export default SolicitudAdopcion;

