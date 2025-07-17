import express from 'express';
import {
  createVeterinario,
  getVeterinarios,
  getVeterinarioById,
  updateVeterinario,
  deleteVeterinario
} from '../controllers/veterinarioController.js';

const router = express.Router();

// Crear veterinario
router.post('/', createVeterinario);

// Obtener todos los veterinarios
router.get('/', getVeterinarios);

// Obtener veterinario por ID
router.get('/:id', getVeterinarioById);

// Actualizar veterinario por ID
router.put('/:id', updateVeterinario);

// Eliminar veterinario por ID
router.delete('/:id', deleteVeterinario);

export default router;
