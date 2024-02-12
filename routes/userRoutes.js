import express from "express";

import {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
} from "../controllers/userControllers.js";

const routes = express.Router();

routes.get("/login", formularioLogin);
routes.get("/registro", formularioRegistro);
routes.get("/olvidePassword", formularioOlvidePassword);

export default routes;
