const route = require("express").Router();

//-----------Middlewares-------------------
const { validar_jwt } = require("../middlewares/validar_jwt.middlewares");
const { verificarActivo } = require("../middlewares/user.middlewares");

//----------Controladores-----------------
const {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/personas.controllers");
const {
  post_middlewares_professional,
  update_middlewares_professional,
} = require("../middlewares/personas.middlewares");

//---------------Rutas---------------------
// publicas
route.get("/", getUsuarios);
route.get("/:id", getUsuario);

// privadas // [validar_jwt, verificarActivo],
route.post("/", [validar_jwt, post_middlewares_professional], createUsuario);
route.put(
  "/:id",
  [validar_jwt, update_middlewares_professional],
  updateUsuario
);
// route.put("/password/:id", [validar_jwt, verificarActivo], updateProfesional);
route.delete("/:id", [validar_jwt, verificarActivo], deleteUsuario);

module.exports = route;
