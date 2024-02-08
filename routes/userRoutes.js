import express from "express";

import {
  formularioLogin,
  formularioRegistro,
} from "../controllers/userControllers.js";

const routes = express.Router();

routes.get("/login", formularioLogin);
routes.get("/registro", formularioRegistro);

export default routes;
