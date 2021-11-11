const middlewares = {};

middlewares.professionalExtractAtributes = (req, res, next) => {
  let { datos_personales } = req.body;

  const { fullname, birthdate, dni, gender, country, state, address, hobbies } =
    datos_personales;

  const extracted_personal_info = {
    fullname,
    birthdate,
    dni,
    gender,
    country,
    state,
    address,
    hobbies,
  };

  const extracted_contact_info = {
    phone,
    email,
    social_media,
  };

  const extracted_datos_personales = {
    primary,
    secondary,
    tertiary,
    universitary,
    certifications,
  };

  datos_personales = extracted_personal_info;

  next();
};

module.exports = middlewares;
