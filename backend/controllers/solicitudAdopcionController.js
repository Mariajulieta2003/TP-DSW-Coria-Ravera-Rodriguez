import SolicitudAdopcion from '../models/solicitudAdopcion.js';
import Usuario from '../models/usuario.js';
import Mascota from '../models/mascota.js';

// Crear una nueva solicitud de adopción
export const createSolicitudAdopcion = async (req, res) => {
  try {
    const nuevaSolicitud = await SolicitudAdopcion.create(req.body);
    res.status(201).json(nuevaSolicitud);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las solicitudes con datos de usuario y mascota
export const getSolicitudesAdopcion = async (req, res) => {
  try {
    const solicitudes = await SolicitudAdopcion.findAll({
      include: [Usuario, Mascota]
    });
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una solicitud específica por ID
export const getSolicitudAdopcionById = async (req, res) => {
  try {
    const solicitud = await SolicitudAdopcion.findByPk(req.params.id, {
      include: [Usuario, Mascota]
    });
    if (!solicitud) return res.status(404).json({ error: 'Solicitud no encontrada' });
    res.json(solicitud);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una solicitud por ID
export const updateSolicitudAdopcion = async (req, res) => {
  try {
    const solicitud = await SolicitudAdopcion.findByPk(req.params.id);
    if (!solicitud) return res.status(404).json({ error: 'Solicitud no encontrada' });
    await solicitud.update(req.body);
    res.json(solicitud);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una solicitud por ID
export const deleteSolicitudAdopcion = async (req, res) => {
  try {
    const solicitud = await SolicitudAdopcion.findByPk(req.params.id);
    if (!solicitud) return res.status(404).json({ error: 'Solicitud no encontrada' });
    await solicitud.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
