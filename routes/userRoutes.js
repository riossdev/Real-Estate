import express from "express";

import {
  formularioLogin,
  formularioRegistro,
  Registro,
  formularioOlvidePassword,
} from "../controllers/userControllers.js";

const routes = express.Router();

routes.get("/login", formularioLogin);

routes.get("/registro", formularioRegistro);
routes.post("/registro", Registro);

routes.get("/olvidePassword", formularioOlvidePassword);

export default routes;
