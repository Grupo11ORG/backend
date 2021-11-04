const Usuarios = require("../models/usuarios.models");
const { findByIdAndDelete } = require("../models/usuarios.models");
const controller = {};

controller.getUsuarios = async (_req, res) => {
  const usuarios = await Usuarios.find({ active: true });

  res.json(usuarios);
};

controller.getUsuarios = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarios = await Usuarios.findOne({ _id: id });
    res.json(usuarios);
  } catch (error) {
    res.json({
      msg: "Error al obtener usuarios",
    });
  }
};

controller.createUsuarios = async (req, res) => {
  const { datos_personales } = req.body;

  try {
    const usuarios = new Usuarios({
      datos_personales,
    });
    await usuarios.save();

    res.json({
      msg: "Usuario registrado",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "ocurrio un error al crear registro",
    });
  }
};

controller.updateUsuarios = async (req, res) => {
  const { id } = req.params;
  const { datos_personales } = req.body;
  const update = {};

  if (datos_personales) {
    update.datos_personales = datos_personales;
  }

  const execute_validation = update.datos_personales;

  if (execute_validation) {
    try {
      await Usuarios.findByIdAndUpdate(id, update, {
        new: true,
      });
      return res.json({ msg: "Datos del usuario actualizados" });
    } catch (error) {
      return res
        .status(401)
        .json({ msg: "Error al actualizar datos del usuario" });
    }
  } else {
    res.status(401).json({
      msg: "no se enviaron los datos",
    });
  }
};

controller.deleteUsuarios = async (req, res) => {
  const { id } = req.params;

  try {
    await findByIdAndDelete(id);

    res.json({
      msg: "el Usuarios se elimino del sistema",
    });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar Usuarios" });
  }
};

module.exports = controller;
