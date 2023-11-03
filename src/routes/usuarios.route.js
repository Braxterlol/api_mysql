const express = require("express");
const usuarioRoute = express.Router();
const {
  obtenerProducto, obtenerProductosPorTipo, obtenerProductos,
} = require("../controllers/usuarios.controller");

usuarioRoute.get("/productos", obtenerProductos); 
usuarioRoute.get("/productos/tipo/:tipo", obtenerProductosPorTipo); 
usuarioRoute.get("/productos/:productoId", obtenerProducto); 

module.exports = usuarioRoute;
