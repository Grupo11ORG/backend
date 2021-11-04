const Profesionales = require("../models/professional.models");
const { findByIdAndDelete } = require("../models/professional.models");
const controller = {};

controller.getProfesionales = async (_req, res) => {
  const profesionales = await Profesionales.find({ active: true });

  res.json(profesionales);
};

controller.getProfesional = async (req, res) => {
  const { id } = req.params;

  try {
    const profesionales = await Profesionales.findOne({ _id: id });
    res.json(profesionales);
  } catch (error) {
    res.json({
      msg: "Error al obtener profesional",
    });
  }
};

controller.createProfesional = async (req, res) => {
  const { datos_personales, info_profesional, info_lugar_trabajo } = req.body;

  try {
    const profesionales = new Profesionales({
      datos_personales,
      info_profesional,
      info_lugar_trabajo,
    });
    await profesionales.save();

    res.json({
      msg: "profesional agregado",
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
  const { datos_personales, info_profesional, info_lugar_trabajo } = req.body;
  const update = {};

  if (datos_personales) {
    update.datos_personales = datos_personales;
  }

  if (info_profesional) {
    update.info_profesional = info_profesional;
  }

  if (info_lugar_trabajo) {
    update.info_lugar_trabajo = info_lugar_trabajo;
  }

  const execute_validation =
    update.datos_personales ||
    update.info_profesional ||
    update.info_lugar_trabajo;

  if (execute_validation) {
    try {
      await Profesionales.findByIdAndUpdate(id, update, {
        new: true,
      });
      return res.json({ msg: "Datos de profesional actualizados" });
    } catch (error) {
      return res.status(401).json({ msg: "Error al actualizar profesional" });
    }
  } else {
    res.status(401).json({
      msg: "no se enviaron datos",
    });
  }
};

controller.deleteProfesional = async (req, res) => {
  const { id } = req.params;

  try {
    await findByIdAndDelete(id);

    res.json({
      msg: "el profesional se elimino del sistema",
    });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar profesional" });
  }
};

module.exports = controller;
