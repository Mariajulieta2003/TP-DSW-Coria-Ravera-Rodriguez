import Especie from '../models/especie.js';

// Crear especie
export const createEspecie = async (req, res) => {
  try {
    const nuevaEspecie = await Especie.create(req.body);
    res.status(201).json(nuevaEspecie);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la especie', detalle: error.message });
  }
};

// Obtener todas las especies
export const getEspecies = async (req, res) => {
  try {
    const especies = await Especie.findAll();
    res.status(200).json(especies);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las especies', detalle: error.message });
  }
};

// Obtener una especie por ID
export const getEspecieById = async (req, res) => {
  try {
    const especie = await Especie.findByPk(req.params.id);
    if (!especie) return res.status(404).json({ error: 'Especie no encontrada' });
    res.status(200).json(especie);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la especie', detalle: error.message });
  }
};

// Actualizar una especie
export const updateEspecie = async (req, res) => {
  try {
    const especie = await Especie.findByPk(req.params.id);
    if (!especie) return res.status(404).json({ error: 'Especie no encontrada' });

    await especie.update(req.body);
    res.status(200).json(especie);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la especie', detalle: error.message });
  }
};
// Eliminar una especie
export const deleteEspecie = async (req, res) => {
  try {
    const especie = await Especie.findByPk(req.params.id);
    if (!especie) return res.status(404).json({ error: 'Especie no encontrada' });

    await especie.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la especie', detalle: error.message });
  }
};
