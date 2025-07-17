import Patologia from '../models/patologia.js';
import Mascota from '../models/mascota.js';
import Especie from '../models/especie.js';

// Crear patologia
export const createPatologia = async (req, res) => {
  try {
    const nuevaPatologia = await Patologia.create(req.body);
    res.status(201).json(nuevaPatologia);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la patología', detalle: error.message });
  }
};

// Obtener todas las patologias con datos de mascota y especie
export const getPatologias = async (req, res) => {
  try {
    const patologias = await Patologia.findAll({
      include: [
        { model: Mascota, attributes: ['id', 'nombre'] },
        { model: Especie, attributes: ['id', 'nombre'] }
      ]
    });
    res.status(200).json(patologias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las patologías', detalle: error.message });
  }
};

// Obtener una patologia específica por ID
export const getPatologiaById = async (req, res) => {
  try {
    const patologia = await Patologia.findByPk(req.params.id, {
      include: [
        { model: Mascota, attributes: ['id', 'nombre'] },
        { model: Especie, attributes: ['id', 'nombre'] }
      ]
    });
    if (!patologia) return res.status(404).json({ error: 'Patología no encontrada' });
    res.status(200).json(patologia);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la patología', detalle: error.message });
  }
};

// Actualizar una patologia por ID
export const updatePatologia = async (req, res) => {
  try {
    const patologia = await Patologia.findByPk(req.params.id);
    if (!patologia) return res.status(404).json({ error: 'Patología no encontrada' });

    await patologia.update(req.body);
    res.status(200).json(patologia);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la patología', detalle: error.message });
  }
};

// Eliminar una patologia por ID
export const deletePatologia = async (req, res) => {
  try {
    const patologia = await Patologia.findByPk(req.params.id);
    if (!patologia) return res.status(404).json({ error: 'Patología no encontrada' });

    await patologia.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la patología', detalle: error.message });
  }
};
         