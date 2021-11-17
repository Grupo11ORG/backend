const route = require("express").Router();

//-----------Middlewares-------------------
const { validar_jwt } = require("../middlewares/validar_jwt.middlewares");
const { verificarActivo } = require("../middlewares/user.middlewares");

//----------Controladores-----------------
const {
  getProfesionales,
  getProfesional,
  createProfesional,
  updateProfesional,
  deleteProfesional,
} = require("../controllers/personas.controllers");
const {
  post_middlewares_professional,
  update_middlewares_professional,
} = require("../middlewares/form_personas.middlewares");

//---------------Rutas---------------------
// publicas
route.get("/", getProfesionales);
route.get("/:id", getProfesional);

// privadas // [validar_jwt, verificarActivo],
route.post(
  "/",
  [validar_jwt, post_middlewares_professional],
  createProfesional
);
route.put(
  "/:id",
  [validar_jwt, update_middlewares_professional],
  updateProfesional
);
// route.put("/password/:id", [validar_jwt, verificarActivo], updateProfesional);
route.delete("/:id", [validar_jwt, verificarActivo], deleteProfesional);

module.exports = route;
