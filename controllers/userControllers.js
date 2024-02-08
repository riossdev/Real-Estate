// Formulario-Login
const formularioLogin = (req, res) => {
  res.render("auth/login", {});
};
// Formulario Registro
const formularioRegistro = (req, res) => {
  res.render("auth/registro", {});
};

export { formularioLogin, formularioRegistro };
