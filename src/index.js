// LLamadas de Librerias
const express = require("express");
const path = require("path");

// Crear la aplicación de Express
const app = express();

const port = process.env.port || 2025;

// Configurar la carpeta pública para servir archivos estáticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));

// Configurar el motor de vistas a usar
app.set("view engine", "ejs"); // usar EJS como motor de vistas
app.set("views", path.resolve(__dirname, "vistas")); // establecer la carpeta de vistas en ./views

// rutas para el inicio de la aplicación
app.use("/", require("./router/routes"));   

// Levantar servidor
app.listen(port, () => console.log("Corriendo servidor en: http://localhost:2025/index"));