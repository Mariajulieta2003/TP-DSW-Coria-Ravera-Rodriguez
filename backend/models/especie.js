import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Especie = sequelize.define('Especie', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: false 
  }
}, {
  tableName: 'especies'
});

export default Especie;


