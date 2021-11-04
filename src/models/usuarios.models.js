const { model, Schema } = require("mongoose");

const Usuarios = new Schema({
  datos_personales: {
    nombre_completo: {
      type: String,
      require: true,
    },
    fecha_nacimiento: {
      type: Date,
      require: true,
    },
    dni: {
      type: String,
      require: true,
      unique: true,
    },
    sexo: {
      type: String,
      require: true,
    },
    telefono: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
  },
})