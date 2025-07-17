import express from 'express';
import {
  createConsulta,
  getConsultas,
  getConsultaById,
  updateConsulta,
  deleteConsulta
} from '../controllers/consultaVeterinariaController.js';

const router = express.Router();

// Crear una nueva consulta
router.post('/', createConsulta);
// Obtener todas las consultas
router.get('/', getConsultas);
// Obtener una consulta por ID
router.get('/:id', getConsultaById);
// Actualizar una consulta
router.put('/:id', updateConsulta);
// Eliminar una consulta
router.delete('/:id', deleteConsulta);

export default router;
