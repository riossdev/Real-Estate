import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import bd from "../config/bd.js";

// Create table
const Users = bd.define(
  "Usuarios",
  {
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
  },
  {
    hooks: {
      beforeCreate: async function (Users) {
        const salt = await bcrypt.genSalt(10);
        Users.password = await bcrypt.hash(Users.password, salt);
      },
    },
  }
);

export default Users;
