const route = require("express").Router();

//-----------Middlewares-------------------
const { validar_jwt } = require("../middlewares/validar_jwt.middlewares");
const { verificarActivo } = require("../middlewares/user.middlewares");

//----------Controladores-----------------
const {
  createPersona,
  updatePersona,
  deletePersona,
  getPersonas,
  getPersona,
} = require("../controllers/personas.controllers");
const {
  post_middlewares_persona,
  update_middlewares_persona,
} = require("../middlewares/form_personas.middlewares");

//---------------Rutas---------------------
// publicas
route.get("/", getPersonas);
route.get("/:id", getPersona);

// privadas // [validar_jwt, verificarActivo],
route.post("/", [validar_jwt, post_middlewares_persona], createPersona);
route.put("/:id", [validar_jwt, update_middlewares_persona], updatePersona);
// route.put("/password/:id", [validar_jwt, verificarActivo], updateProfesional);
route.delete("/:id", [validar_jwt, verificarActivo], deletePersona);

module.exports = route;
