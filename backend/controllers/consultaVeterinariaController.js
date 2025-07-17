import ConsultaVeterinaria from '../models/consultaVeterinaria.js';
import Mascota from '../models/mascota.js';
import Veterinario from '../models/veterinario.js';

// Crear una nueva consulta
export const createConsulta = async (req, res) => {
  try {
    const { fecha, observacion, mascotaId, veterinarioId } = req.body;

    const nuevaConsulta = await ConsultaVeterinaria.create({
      fecha,
      observacion,
      mascotaId,
      veterinarioId
    });

    res.status(201).json(nuevaConsulta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las consultas
export const getConsultas = async (req, res) => {
  try {
    const consultas = await ConsultaVeterinaria.findAll({
      include: [Mascota, Veterinario]
    });
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una consulta por ID
export const getConsultaById = async (req, res) => {
  try {
    const consulta = await ConsultaVeterinaria.findByPk(req.params.id, {
      include: [Mascota, Veterinario]
    });

    if (!consulta) return res.status(404).json({ error: 'Consulta no encontrada' });

    res.json(consulta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una consulta
export const updateConsulta = async (req, res) => {
  try {
    const consulta = await ConsultaVeterinaria.findByPk(req.params.id);
    if (!consulta) return res.status(404).json({ error: 'Consulta no encontrada' });

    await consulta.update(req.body);
    res.json(consulta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una consulta
export const deleteConsulta = async (req, res) => {
  try {
    const consulta = await ConsultaVeterinaria.findByPk(req.params.id);
    if (!consulta) return res.status(404).json({ error: 'Consulta no encontrada' });

    await consulta.destroy();
    res.json({ mensaje: 'Consulta eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
