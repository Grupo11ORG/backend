const { model, Schema } = require("mongoose");

const Professional = new Schema({
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

  info_profesional: {
    certificaciones: {
      type: Array,
      require: false,
    },
    rubros: {
      type: Array,
      require: true,
    },
  },

  info_lugar_trabajo: {
    dias_atencion: {
      type: String,
    },
    horario_atencion: {
      type: String,
    },
    direccion: {
      type: String,
    },
    marcador: {
      latitud: {
        type: String,
      },
      longitud: {
        type: String,
      },
    },
  },
});

module.exports = model("Professional", Professional);
