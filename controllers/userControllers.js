import { check, validationResult } from "express-validator";

import Users from "../models/User.js";

// Formulario-Login
const formularioLogin = (req, res) => {
  res.render("auth/login", {
    Pagina: "Iniciar Sesión",
  });
};
// Formulario Registro
const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    Pagina: "Crear Cuenta!",
  });
};

// Formulario Registro
const Registro = async (req, res) => {
  // validations

  await check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio ")
    .run(req);

  let resultado = validationResult(req);
  res.json(resultado.array());

  const usuario = await Users.create(req.body);
  res.json(usuario);
};

// Olvide Password
const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvidePassword", {
    Pagina: "Recupera tu acceso a Bienes Raices",
  });
};

export {
  formularioLogin,
  formularioRegistro,
  Registro,
  formularioOlvidePassword,
};
