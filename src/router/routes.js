const express = require('express');
const router = express.Router();
const mainController = require('../controller/controller');

// Definir las rutas
router.get('/index', mainController.index);// Página principal
router.get('/login', mainController.login);// Página login
router.get('/admin', mainController.admin);// Página admin
router.get('/alumno', mainController.alumno);// Página alumno
router.get('/vista', mainController.vista);// Página vista
router.get('/carga', mainController.carga);// Página carga
module.exports = router;