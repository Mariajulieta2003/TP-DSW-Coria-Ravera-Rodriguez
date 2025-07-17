import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    dialectOptions: {
      socketPath: '/tmp/mysql.sock' // ← Socket de MySQL en tu Mac
    },
    logging: false,
  }
);

// Probar conexión a la base de datos
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection();

export { sequelize };

