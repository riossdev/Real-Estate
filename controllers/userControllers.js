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
// Olvide Password
const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvidePassword", {
    Pagina: "Recupera tu acceso a Bienes Raices",
  });
};

export { formularioLogin, formularioRegistro, formularioOlvidePassword };
