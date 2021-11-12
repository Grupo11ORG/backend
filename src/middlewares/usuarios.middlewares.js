const middlewares = {};

middlewares.professionalExtractAtributes = (req, res, next) => {
  let { datos_personales } = req.body;

  const { nombre_completo, fecha_nacimiento, dni, sexo, telefono, email } =
    datos_personales;

  const extracted_datos_personales = {
    nombre_completo,
    fecha_nacimiento,
    dni,
    sexo,
    telefono,
    email,
  };

  datos_personales = extracted_datos_personales;

  next();
};

module.exports = middlewares;
