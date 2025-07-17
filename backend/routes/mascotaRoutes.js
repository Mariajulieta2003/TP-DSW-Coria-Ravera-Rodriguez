import express from 'express';
import {
  createMascota,
  getMascotas,
  getMascotaById,
  updateMascota,
  deleteMascota
} from '../controllers/mascotaController.js';

const router = express.Router();

// Crear mascota
router.post('/', createMascota);
// Obtener todas las mascotas
router.get('/', getMascotas);
// Obtener mascota por ID
router.get('/:id', getMascotaById);
// Actualizar mascota por ID
router.put('/:id', updateMascota);
// Eliminar mascota por ID
router.delete('/:id', deleteMascota);

export default router;
