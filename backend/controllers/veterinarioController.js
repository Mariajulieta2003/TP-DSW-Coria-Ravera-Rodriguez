import Veterinario from '../models/veterinario.js';

// Crear veterinario
export const createVeterinario = async (req, res) => {
  try {
    const nuevoVeterinario = await Veterinario.create(req.body);
    res.status(201).json(nuevoVeterinario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los veterinarios
export const getVeterinarios = async (req, res) => {
  try {
    const veterinarios = await Veterinario.findAll();
    res.json(veterinarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener veterinario por ID
export const getVeterinarioById = async (req, res) => {
  try {
    const veterinario = await Veterinario.findByPk(req.params.id);
    if (!veterinario) return res.status(404).json({ error: 'Veterinario no encontrado' });
    res.json(veterinario);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Actualizar veterinario
export const updateVeterinario = async (req, res) => {
  try {
    const veterinario = await Veterinario.findByPk(req.params.id);
    if (!veterinario) return res.status(404).json({ error: 'Veterinario no encontrado' });
    await veterinario.update(req.body);
    res.json(veterinario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar veterinario
export const deleteVeterinario = async (req, res) => {
  try {
    const veterinario = await Veterinario.findByPk(req.params.id);
    if (!veterinario) return res.status(404).json({ error: 'Veterinario no encontrado' });
    await veterinario.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};