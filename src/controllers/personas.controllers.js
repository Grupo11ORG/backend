const Personas = require("../models/personas.models");
const { findByIdAndDelete } = require("../models/personas.models");
const controller = {};

controller.getPersonas = async (_req, res) => {
  const personas = await Personas.find({ active: true });

  res.json(personas);
};

controller.getPersona = async (req, res) => {
  const { id } = req.params;

  try {
    const personas = await Personas.findOne({ _id: id });
    res.json(personas);
  } catch (error) {
    res.json({
      msg: "Error al obtener profesional",
    });
  }
};

controller.createPersona = async (req, res) => {
  const { datos_personales, info_profesional, info_lugar_trabajo } = req.body;

  try {
    const profesionales = new Personas({
      datos_personales,
      es_profesional,
      info_profesional,
      info_lugar_trabajo,
    });
    await profesionales.save();

    res.json({
      msg: "Persona agregada correctamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "ocurrio un error al crear registro",
    });
  }
};

controller.updateProfesional = async (req, res) => {
  const { id } = req.params;
  const {
    datos_personales,
    es_profesional,
    info_profesional,
    info_lugar_trabajo,
  } = req.body;
  const update = {};

  if (datos_personales) {
    update.datos_personales = datos_personales;
  }

  if (es_profesional) {
    update.es_profesional = es_profesional;
  }

  if (info_profesional) {
    update.info_profesional = info_profesional;
  }

  if (info_lugar_trabajo) {
    update.info_lugar_trabajo = info_lugar_trabajo;
  }

  const execute_validation =
    update.datos_personales ||
    update.es_profesional ||
    update.info_profesional ||
    update.info_lugar_trabajo;

  if (execute_validation) {
    try {
      await Profesionales.findByIdAndUpdate(id, update, {
        new: true,
      });
      return res.json({ msg: "Datos actualizados" });
    } catch (error) {
      return res.status(401).json({ msg: "Error al actualizar los datos" });
    }
  } else {
    res.status(401).json({
      msg: "no se enviaron datos",
    });
  }
};

controller.deletePersona = async (req, res) => {
  const { id } = req.params;

  try {
    await findByIdAndDelete(id);

    res.json({
      msg: "datos eliminados correctamente",
    });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar los datos" });
  }
};

module.exports = controller;
