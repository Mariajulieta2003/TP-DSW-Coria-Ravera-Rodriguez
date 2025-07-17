import { DataTypes } from 'sequelize';
import { sequelize } from './index.js'; // asegurate de tener exportado { sequelize }

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rol: {
    type: DataTypes.ENUM('comun', 'adm'),
    defaultValue: 'comun'
  },
  tipoVivienda: {
    type: DataTypes.STRING
  }
});

export default Usuario;
