import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Veterinario = sequelize.define('Veterinario', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  matricula: { type: DataTypes.STRING, allowNull: false, unique: true }
}, {
  tableName: 'veterinarios'
});

export default Veterinario;
