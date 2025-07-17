import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { sequelize } from './backend/models/index.js';

import usuarioRoutes from './backend/routes/usuarioRoutes.js';
import mascotaRoutes from './backend/routes/mascotaRoutes.js';
import solicitudRoutes from './backend/routes/solicitudAdopcionRoutes.js';
import especieRoutes from './backend/routes/especieRoutes.js';
import patologiaRoutes from './backend/routes/patologiaRoutes.js';
import veterinarioRoutes from './backend/routes/veterinarioRoutes.js';

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/mascotas', mascotaRoutes);
app.use('/solicitudes', solicitudRoutes);
app.use('/especies', especieRoutes);
app.use('/patologias', patologiaRoutes);
app.use('/veterinarios', veterinarioRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error al sincronizar la base de datos:', error);
});

export default app;
