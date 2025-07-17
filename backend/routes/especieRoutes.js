import express from 'express';
import {
  createEspecie,
  getEspecies,
  getEspecieById,
  updateEspecie,
  deleteEspecie,
} from '../controllers/especieController.js';

const router = express.Router();

// Crear especie
router.post('/', createEspecie);
// Obtener todas las especies
router.get('/', getEspecies);
// Obtener especie por ID
router.get('/:id', getEspecieById);
// Actualizar especie por ID
router.put('/:id', updateEspecie);
// Eliminar especie por ID
router.delete('/:id', deleteEspecie);


export default router;
