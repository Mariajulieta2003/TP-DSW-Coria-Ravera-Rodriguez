import express from 'express';
import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario
} from '../controllers/usuarioController.js';

const router = express.Router();

//crear usuario
router.post('/', createUsuario);
// Obtener todos los usuarios
router.get('/', getUsuarios);
// Obtener usuario por ID
router.get('/:id', getUsuarioById);
// Actualizar usuario por ID
router.put('/:id', updateUsuario);
// Eliminar usuario por ID
router.delete('/:id', deleteUsuario);

export default router;
