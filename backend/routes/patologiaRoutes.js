import express from 'express';
import {
  createPatologia,
  getPatologias,
  getPatologiaById,
  updatePatologia,
  deletePatologia
} from '../controllers/patologiaController.js';

const router = express.Router();

//Crear una patología
router.post('/', createPatologia);
//Obtener todas las patologías
router.get('/', getPatologias);
//Obtener una patología por ID
router.get('/:id', getPatologiaById);
//Actualizar una patología por ID
router.put('/:id', updatePatologia);
//Eliminar una patología por ID
router.delete('/:id', deletePatologia);

export default router;
