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
    certifications: {
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
      type: Date,
    },
    direccion: {
      type: string,
    },
    marcador: {
      latitud: {
        type: string,
      },
      longitud: {
        type: string,
      },
    },
  },
});

module.exports = model("Professional", Professional);
