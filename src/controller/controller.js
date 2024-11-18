const mainController = {};  

mainController.index = async (req, res) => {
  return res.render("index.ejs");
};
mainController.login = async (req, res) => {
    return res.render("login.ejs");
  };
  mainController.admin = async (req, res) => {
    return res.render("admin.ejs");
  };
  mainController.alumno = async (req, res) => {
    return res.render("alumno.ejs");
  };
  mainController.carga = async (req, res) => {
    return res.render("carga.ejs");
  };
  mainController.vista = async (req, res) => {
    return res.render("vista.ejs");
  };
module.exports = mainController;
