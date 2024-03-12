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
  await check("email")
    .isEmail()
    .withMessage("El email es obligatorio")
    .run(req);
  await check("password")
    .isLength({ min: 6 })
    .withMessage("El password debe ser al menos de 6 caracteres")
    .run(req);
  // await check("repetirPassword")
  //   .equals("password")
  //   .withMessage("Los passwords no son iguales")
  //   .run(req);
  await check("repetirPassword")
    .isLength({ min: 6 })
    .withMessage("El password debe ser al menos de 6 caracteres")
    .equals(req.body.password) // Accedemos al valor del campo 'password'
    .withMessage("Los passwords no son iguales")
    .run(req);

  let resultado = validationResult(req);
  // Validar que el usuario no este vacio

  if (!resultado.isEmpty()) {
    return res.render("auth/registro", {
      Pagina: "Crear Cuenta!",
      errores: resultado.array(),
    });
  }
  // res.json(resultado.array());

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
