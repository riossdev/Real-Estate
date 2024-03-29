import express from "express";
import userRoutes from "./routes/userRoutes.js";
import db from "./config/bd.js";

const App = express();

// Habilitar lectura de formularios
App.use(express.urlencoded({ extended: true }));
// Port

const PORT = 4001;

// Conexion a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log("Conexion Exitosa a la BD, con sequelize!");
} catch (error) {}

//Pug
App.set("view engine", "pug");
App.set("views", "./views");

// public
App.use(express.static("src"));

// routing
App.use("/auth", userRoutes);

App.listen(PORT, () => console.log(`Listening on port ${PORT}`));
