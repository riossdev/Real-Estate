import { DataTypes } from "sequelize";
import bd from "../config/bd.js";

// Create table
const Users = bd.define("Usuarios", {
  nombre: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  token: DataTypes.STRING,
  confirmado: DataTypes.BOOLEAN,
});

export default Users;
